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
  
  const username = credentials.leetcode.username; // Define username here
  
  try {
    // Fetch main stats from API
    const mainResponse = await fetch(`${credentials.leetcode.apiUrl}/${username}`);
    if (!mainResponse.ok) throw new Error(`LeetCode API error: ${mainResponse.status}`);
    
    const mainData = await mainResponse.json();

    // Basic stats that work without CORS issues
    const baseStats = {
      globalRank: mainData.ranking,
      reputation: mainData.reputation,
      contributionPoints: mainData.contributionPoints,
      
      problemsSolved: mainData.totalSolved,
      easy: mainData.easySolved,
      medium: mainData.mediumSolved,
      hard: mainData.hardSolved,
      
      totalEasy: mainData.totalEasy,
      totalMedium: mainData.totalMedium,
      totalHard: mainData.totalHard,
      totalQuestions: mainData.totalQuestions,
      
      acceptanceRate: mainData.acceptanceRate,
      
      submissionCalendar: mainData.submissionCalendar,
      status: mainData.status
    };

    // Try to get contest data separately from the new API
    let contestData = null;
    try {
      const contestResponse = await fetch(`https://alfa-leetcode-api-three.vercel.app/${username}/contest`);
      if (contestResponse.ok) {
        contestData = await contestResponse.json();
      }
    } catch (contestErr) {
      console.warn('Could not fetch contest data:', contestErr.message);
    }

    // Process contest data if available
    let contestRanking = null;
    let contests = null;
    let bestRank = null;
    let contestGlobalRank = null;

    if (contestData) {
      contestRanking = contestData.contestRating || null;
      contests = contestData.contestParticipation?.length || null;
      
      if (contestData.contestParticipation?.length > 0) {
        // Find best rank (lowest ranking number)
        bestRank = Math.min(...contestData.contestParticipation.map(c => c.ranking));
        // Use latest contest ranking or global ranking
        contestGlobalRank = contestData.contestGlobalRanking || 
                           contestData.contestParticipation[contestData.contestParticipation.length - 1]?.ranking || null;
      }
    }
    return {
      ...baseStats,
      contestRanking: contestRanking,
      contests: contests,
      bestRank: bestRank,
      contestGlobalRank: contestGlobalRank,
    };
  } catch (error) {
    console.error('LeetCode fetch error:', error);
    throw new Error(`Failed to fetch LeetCode stats: ${error.message}`);
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
  const results = await Promise.allSettled([
    fetchGitHubStats(),
    fetchLeetCodeStats(),
    fetchWakaTimeStats('last30'),
    fetchWakaTimeStats('all')
  ]);

  return {
    github: results[0].status === 'fulfilled' ? results[0].value : null,
    leetcode: results[1].status === 'fulfilled' ? results[1].value : null,
    wakatime30Days: results[2].status === 'fulfilled' ? results[2].value : null,
    wakatimeAllTime: results[3].status === 'fulfilled' ? results[3].value : null,
    errors: {
      github: results[0].status === 'rejected' ? results[0].reason.message : null,
      leetcode: results[1].status === 'rejected' ? results[1].reason.message : null,
      wakatime30Days: results[2].status === 'rejected' ? results[2].reason.message : null,
      wakatimeAllTime: results[3].status === 'rejected' ? results[3].reason.message : null
    }
  };
};