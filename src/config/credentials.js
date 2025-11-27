export const credentials = {
  github: {
    username: import.meta.env.VITE_GITHUB_USERNAME,
    token: import.meta.env.VITE_GITHUB_API_TOKEN,
  },
  leetcode: {
    username: import.meta.env.VITE_LEETCODE_USERNAME,
    apiUrl: import.meta.env.VITE_LEETCODE_API_URL || 'https://leetcode-stats-api.herokuapp.com',
  },
  wakatime: {
    last30Days: import.meta.env.VITE_WAKATIME_30_DAYS_URL,
    allTime: import.meta.env.VITE_WAKATIME_ALL_TIME_URL,
  },
};