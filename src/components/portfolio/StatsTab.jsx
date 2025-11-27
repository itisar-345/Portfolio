import { BarChart3, Users, GitCommit, Code, Activity, Star, GitPullRequest, AlertCircle, Trophy } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";

const StatsTab = ({ devStats }) => {
  const { github, leetcode, wakatime30Days, wakatimeAllTime } = devStats;

  return (
    <section className="repo-container">
      <div className="repo-header">
        <div className="repo-title">
          <BarChart3 size={16} />
          <span>developer-insights</span>
          <span className="repo-visibility">Public</span>
        </div>
      </div>
      
      <div className="insights-dashboard">
        {/* GitHub Stats - Updated Section */}
        <div className="stats-section">
          <div className="section-title">
            <Users size={16} />
            <span>GitHub Statistics</span>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Repository Metrics</h4>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-label">Public Repos</span>
                  <span className="stat-value">{github?.publicRepos || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Avg Commits/Repo</span>
                  <span className="stat-value">{github?.avgCommitsPerRepo || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Forks</span>
                  <span className="stat-value">{github?.forks || '—'}</span>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <h4>Contribution Activity</h4>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-label">Total Commits</span>
                  <span className="stat-value">{github?.totalCommits || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Total Contributions</span>
                  <span className="stat-value">{github?.totalContributions || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Contributed To</span>
                  <span className="stat-value">{github?.contributedTo || '—'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LeetCode Stats - Will show contest data when available */}
        <div className="stats-section">
          <div className="section-title">
            <Code size={16} />
            <span>LeetCode Statistics</span>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>General Stats</h4>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-label">Problems Solved</span>
                  <span className="stat-value">{leetcode?.problemsSolved || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Acceptance Rate</span>
                  <span className="stat-value">{leetcode?.acceptanceRate ? `${leetcode.acceptanceRate}%` : '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Global Ranking</span>
                  <span className="stat-value">{leetcode?.globalRank ? `#${leetcode.globalRank.toLocaleString()}` : '—'}</span>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <h4>Problem Breakdown</h4>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-label">Easy</span>
                  <span className="stat-value">{leetcode?.easy || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Medium</span>
                  <span className="stat-value">{leetcode?.medium || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Hard</span>
                  <span className="stat-value">{leetcode?.hard || '—'}</span>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <h4>Contest Performance</h4>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-label">Contest Rating</span>
                  <span className="stat-value">{leetcode?.contestRanking ? Math.round(leetcode.contestRanking) : '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Best Rank</span>
                  <span className="stat-value">{leetcode?.bestRank || '—'}</span>
                </div>
                {leetcode?.contestGlobalRank && (
                  <div className="stat-item">
                    <span className="stat-label">Contest Global Rank</span>
                    <span className="stat-value">#{leetcode.contestGlobalRank.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* WakaTime Stats */}
        <div className="stats-section">
          <div className="section-title">
            <Activity size={16} />
            <span>WakaTime Statistics</span>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Coding Hours</h4>
              <div className="stat-items">
                <div className="stat-item">
                  <span className="stat-label">Total Hours</span>
                  <span className="stat-value">{wakatimeAllTime?.totalHours || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Daily Average</span>
                  <span className="stat-value">{wakatimeAllTime?.dailyAverage || '—'}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Best Day</span>
                  <span className="stat-value">{wakatimeAllTime?.bestDay || '—'}</span>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <h4>Last 30 Days Activity</h4>
              <div className="activity-graph" style={{ width: "100%", height: "250px" }}>
                {wakatime30Days?.activityGraph ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={wakatime30Days.activityGraph.map((entry) => ({
                        date: entry.range.date,
                        hours: entry.grand_total.hours || 0,
                      }))}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" tick={{ fontSize: 9 }} interval={3} />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value} hrs`} />
                      <Bar dataKey="hours" fill="#4a9f6a" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="empty-state">
                    <Activity size={24} />
                    <p>Connect WakaTime to see activity</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsTab;