import { credentials } from '../config/credentials';

export const fetchGitHubStats = async () => {
  try {
    const token = credentials.github.token;
    const username = credentials.github.username;
    if (!token) {
      throw new Error("GitHub token missing. Add VITE_GITHUB_API_TOKEN to .env");
    }
    const query = `
      query {
        user(login: "${username}") {
          id
          # Followers / Following
          followers { totalCount }
          following { totalCount }
          # Organizations
          organizations(first: 100) {
            totalCount
          }
          # PUBLIC repos count and details
          repositoriesCount: repositories(privacy: PUBLIC) {
            totalCount
          }
          # Public repos list for counting stars, forks, and other repo metrics
          repositoriesList: repositories(privacy: PUBLIC, first: 100, ownerAffiliations: OWNER) {
            totalCount
            nodes {
              name
              stargazerCount
              forkCount
              releases(first: 1) {
                totalCount
              }
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(first: 0) {
                      totalCount
                    }
                  }
                }
              }
            }
          }
          # Contributions (last 12 months)
          contributionsCollection {
            totalCommitContributions
            contributionCalendar {
              totalContributions
            }
            # Repositories contributed to
            commitContributionsByRepository(maxRepositories: 100) {
              repository { 
                name
                owner {
                  id
                }
              }
            }
            # Pull request contributions
            totalPullRequestContributions
            pullRequestContributions(first: 1) {
              totalCount
            }
            # Issue contributions  
            totalIssueContributions
            issueContributions(first: 1) {
              totalCount
            }
          }
          # Total pull requests created (across all time)
          pullRequests(first: 1) {
            totalCount
          }
          # Total issues created (across all time)
          issues(first: 1) {
            totalCount
          }
        }
      }
    `;
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });
    const json = await response.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error("GitHub GraphQL error");
    }
    const user = json.data.user;
    
    const repos = user.repositoriesList.nodes;
    const totalStars = repos.reduce((sum, r) => sum + r.stargazerCount, 0);
    const totalForks = repos.reduce((sum, r) => sum + r.forkCount, 0);
    const totalReleases = repos.reduce((sum, r) => sum + r.releases.totalCount, 0);
    
    const totalCommitsAllRepos = repos.reduce((sum, r) => {
      return sum + (r.defaultBranchRef?.target?.history?.totalCount || 0);
    }, 0);
    
    const publicReposCount = user.repositoriesList.totalCount;
    const avgCommitsPerRepo = publicReposCount > 0 
      ? (totalCommitsAllRepos / publicReposCount).toFixed(1)
      : 0;

    return {
      username,
      publicRepos: publicReposCount,
      followers: user.followers.totalCount,
      following: user.following.totalCount,
      organizationsCount: user.organizations.totalCount,
      
      stars: totalStars,
      forks: totalForks,
      releases: totalReleases,
      
      totalCommits: user.contributionsCollection.totalCommitContributions,
      totalCommitsAllRepos: totalCommitsAllRepos,
      totalContributions: user.contributionsCollection.contributionCalendar.totalContributions,
      contributedTo: user.contributionsCollection.commitContributionsByRepository.length,
      avgCommitsPerRepo: parseFloat(avgCommitsPerRepo),
      
      totalPRs: user.pullRequests.totalCount,
      totalPRContributions: user.contributionsCollection.totalPullRequestContributions,
      totalIssues: user.issues.totalCount,
      totalIssueContributions: user.contributionsCollection.totalIssueContributions,
    };

  } catch (err) {
    throw new Error(`Failed to fetch GitHub stats: ${err.message}`);
  }
};

export const fetchLeetCodeStats = async () => {
  if (!credentials.leetcode.username) return null;
  
  const username = credentials.leetcode.username;
  const baseUrl = `https://alfa-leetcode-api.onrender.com/${username}`;
  
  try {
    // Fetch sequentially with delays to avoid rate limiting
    const profileRes = await fetch(`${baseUrl}/profile`);
    if (!profileRes.ok) throw new Error('LeetCode profile API error');
    const profile = await profileRes.json();
    
    // Add delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const contestRes = await fetch(`${baseUrl}/contest`);
    if (!contestRes.ok) throw new Error('LeetCode contest API error');
    const contest = await contestRes.json();
    
    // Add delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const solvedRes = await fetch(`${baseUrl}/solved`);
    if (!solvedRes.ok) throw new Error('LeetCode solved API error');
    const solvedData = await solvedRes.json();

    const bestContestEntry = contest.contestParticipation?.reduce((prev, curr) => 
      (prev.ranking < curr.ranking) ? prev : curr
    ); 
    const totalSub = solvedData.totalSubmissionNum?.find(s => s.difficulty === "All")?.submissions || 0;
    const acSub = solvedData.acSubmissionNum?.find(s => s.difficulty === "All")?.submissions || 0;
    const acceptanceRate = totalSub > 0 ? ((acSub / totalSub) * 100).toFixed(1) : 0;

    return {
      // Basic & Social
      globalRank: profile.ranking || null,
      
      // Problem Solving Stats
      problemsSolved: profile.totalSolved || 0,
      easy: profile.easySolved || 0,
      medium: profile.mediumSolved || 0,
      hard: profile.hardSolved || 0,
      
      // Totals
      totalEasy: profile.totalEasy || 0,
      totalMedium: profile.totalMedium || 0,
      totalHard: profile.totalHard || 0,
      totalQuestions: profile.totalQuestions || 0,
      
      // Contest Stats
      contestRating: contest.contestRating ? Math.floor(contest.contestRating) : 0,
      contestGlobalRank: contest.contestGlobalRanking || null,
      bestRank: bestContestEntry?.ranking || null,
      
      // Submission Details (Extracting acceptance rate logic)
      acceptanceRate,
      
      status: 'success'
    };
  } catch (error) {
    console.error('LeetCode fetch error:', error);
    return null;
  }
};

export const fetchWakaTimeStats = async (timeRange = 'last30') => {
  const url = timeRange === 'all'
    ? credentials.wakatime.allTime
    : credentials.wakatime.last30Days;

  if (!url) return null;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`WakaTime API error: ${response.status}`);

    const data = await response.json();

    if (timeRange === 'all') {
      return {
        totalHours: data.data?.grand_total?.human_readable_total_including_other_language,
        dailyAverage: data.data?.grand_total?.human_readable_daily_average_including_other_language,
        bestDay: data.data?.best_day?.text,
        shareUrl: url
      };
    }

    // last 30 days
    return {
      activityGraph: data.data,
      range: data.range,
      shareUrl: url
    };
  } catch (error) {
    throw new Error(`Failed to fetch WakaTime stats: ${error.message}`);
  }
};

export const fetchAllStats = async () => {
  const results = { github: null, leetcode: null, wakatime30Days: null, wakatimeAllTime: null, errors: {} };
  
  // Fetch GitHub stats first
  try {
    results.github = await fetchGitHubStats();
  } catch (error) {
    results.errors.github = error.message;
  }
  
  // Add delay before LeetCode
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Fetch LeetCode stats
  try {
    results.leetcode = await fetchLeetCodeStats();
  } catch (error) {
    results.errors.leetcode = error.message;
  }
  
  // Add delay before WakaTime
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Fetch WakaTime stats (30 days)
  try {
    results.wakatime30Days = await fetchWakaTimeStats('last30');
  } catch (error) {
    results.errors.wakatime30Days = error.message;
  }
  
  // Add delay before final WakaTime call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Fetch WakaTime stats (all time)
  try {
    results.wakatimeAllTime = await fetchWakaTimeStats('all');
  } catch (error) {
    results.errors.wakatimeAllTime = error.message;
  }
  
  return results;
};