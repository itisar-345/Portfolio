import { useEffect, useState } from 'react';
import { statsSources } from '../services/statsService';

const CACHE_KEY = 'developer-stats-cache';
const CACHE_TTL_MS = 5 * 60 * 1000;

const emptyData = {
  github: null,
  leetcode: null,
  wakatime30Days: null,
  wakatimeAllTime: null,
};

// Storage can be unavailable (private mode, blocked site data), so every access is guarded
const readCache = () => {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
  } catch {
    return {};
  }
};

const writeCache = (key, value) => {
  try {
    const cache = readCache();
    cache[key] = { value, savedAt: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Caching is best-effort
  }
};

const getFreshCached = () => {
  const cache = readCache();
  const fresh = {};
  Object.keys(statsSources).forEach((key) => {
    const entry = cache[key];
    if (entry && entry.value != null && Date.now() - entry.savedAt < CACHE_TTL_MS) {
      fresh[key] = entry.value;
    }
  });
  return fresh;
};

// Shares in-flight requests so a remount (e.g. StrictMode) doesn't fire duplicates
const inFlight = {};

const loadSource = (key) => {
  if (!inFlight[key]) {
    inFlight[key] = statsSources[key]().finally(() => {
      delete inFlight[key];
    });
  }
  return inFlight[key];
};

export const useDeveloperStats = () => {
  const [state, setState] = useState(() => {
    const cached = getFreshCached();
    const allCached = Object.keys(statsSources).every((key) => key in cached);
    return {
      status: allCached ? 'ready' : 'loading',
      data: { ...emptyData, ...cached },
      errors: {},
    };
  });

  useEffect(() => {
    let isMounted = true;
    const cached = getFreshCached();
    const pending = Object.keys(statsSources).filter((key) => !(key in cached));

    if (pending.length === 0) return undefined;

    let remaining = pending.length;
    const settle = () => {
      remaining -= 1;
      if (remaining === 0 && isMounted) {
        setState((prev) => ({ ...prev, status: 'ready' }));
      }
    };

    pending.forEach((key) => {
      loadSource(key)
        .then((value) => {
          if (value != null) writeCache(key, value);
          if (!isMounted) return;
          setState((prev) => ({ ...prev, data: { ...prev.data, [key]: value } }));
        })
        .catch((error) => {
          if (!isMounted) return;
          setState((prev) => ({ ...prev, errors: { ...prev.errors, [key]: error.message } }));
        })
        .finally(settle);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};
