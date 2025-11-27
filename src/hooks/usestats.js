import { useEffect, useState } from 'react';
import { fetchAllStats } from '../services/statsService';

export const useDeveloperStats = () => {
  const [state, setState] = useState({
    status: 'idle',
    data: {
      github: null,
      leetcode: null,
      wakatime30Days: null,
      wakatimeAllTime: null,
    },
    errors: {},
  });

  useEffect(() => {
    let isMounted = true;

    const loadStats = async () => {
      setState((prev) => ({ ...prev, status: 'loading' }));

      try {
        const result = await fetchAllStats();
        
        if (!isMounted) return;

        setState({
          status: 'ready',
          data: result,
          errors: result.errors,
        });
      } catch (error) {
        if (!isMounted) return;
        
        setState({
          status: 'error',
          data: {
            github: null,
            leetcode: null,
            wakatime30Days: null,
            wakatimeAllTime: null,
          },
          errors: { general: error.message },
        });
      }
    };

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};

