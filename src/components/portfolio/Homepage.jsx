import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';
import StatsTab from './StatsTab';
import ContactTab from './ContactTab';

import { projects, experiences } from '../../data/info';

import ExperienceTimeline from './ExperienceTimeline';
import { useIsMobile } from '../../hooks/usemobile';
import { useDeveloperStats } from '../../hooks/usestats';
import {
  Activity,
  BarChart3,
  GitBranch,
  Mail,
  Users,
  Zap,
} from 'lucide-react';


const summarize = (text = '') => text.replace(/•/g, '').split('\n')[0].trim();

const getExperienceHighlights = (items = [], limit = 3) =>
  items.slice(0, limit).map((exp) => ({
    id: exp.id,
    company: exp.company,
    position: exp.position,
    timeframe: `${exp.startDate} → ${exp.endDate}`,
    location: exp.location,
    summary: exp.description?.[0],
  }));

const getProjectHighlights = (items = [], limit = 3) =>
  items.slice(0, limit).map((project) => ({
    title: project.title,
    summary: summarize(project.description),
    techStack: project.techStack?.slice(0, 4) || [],
    githubUrl: project.githubUrl,
    liveUrl: project.liveUrl,
  }));




const HomePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedProject, setExpandedProject] = useState(null);
  const isMobile = useIsMobile();
  const { data: devStats, status: statsStatus, errors: statsErrors } = useDeveloperStats();

  const { github, leetcode, wakatimeAllTime } = devStats;


  const experienceHighlights = useMemo(() => getExperienceHighlights(experiences, isMobile ? 2 : 3), [isMobile]);
  const projectHighlights = useMemo(() => getProjectHighlights(projects, isMobile ? 2 : 3), [isMobile]);



  return (
    <div className="app-shell">
      <div className="github-shell">
        <header className="github-header">
          <div className="github-avatar">
            <img src='/me.svg' alt='GitHub avatar' />
            <span className="github-status">
              <span className="status-dot" />
              Open to Work
            </span>
          </div>
          <div className="github-identity">
            <div>
              <p className="github-handle">@ritisa-behera</p>
              <h1>Ritisa Behera</h1>
              <p className="github-tagline">Software Developer & Problem Solver</p>
            </div>
            <div className="github-actions">
              <a className="btn primary" href="mailto:ritisarabindra@gmail.com">
                <Mail size={18} />
                Send Mail
              </a>
              <a className="btn secondary" href="/Ritisa Resume.pdf" download="Ritisa Behera.pdf">
                <Zap size={18} />
                Download CV
              </a>
            </div>
          </div>
        </header>

        <nav className="github-tabs" role="tablist">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'experience', label: 'Experience', icon: Users },
            { id: 'projects', label: 'Projects', icon: GitBranch },
            { id: 'stats', label: 'Stats', icon: BarChart3 },
            { id: 'contact', label: 'Contact', icon: Mail },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                className={`github-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={16} className="tab-icon" />
                <span className="tab-label">{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <main className="github-content">
          {activeTab === 'overview' && (
            <section className="github-grid" role="tabpanel" id="overview-panel">
              <div className="github-column left">
                <section className="card project-highlight-card">
                  <header>
                    <span>Project highlights</span>
                    <GitBranch size={16} />
                  </header>
                  <div className="project-highlight-grid">
                    {projectHighlights.map((project) => (
                      <article key={project.title} className="project-highlight">
                        <div className="project-highlight-head">
                          <p className="project-highlight-title">{project.title}</p>
                          <div className="project-highlight-links">
                            {project.liveUrl && (
                              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                Live
                              </a>
                            )}
                            {project.githubUrl && (
                              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                                Code
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="project-highlight-summary">{project.summary}</p>
                        <div className="project-highlight-tags">
                          {project.techStack.map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="inline-link"
                    onClick={() => setActiveTab('projects')}
                  >
                    Browse all projects →
                  </button>
                </section>
              </div>

              <div className="github-column right">
                <section className="card experience-overview">
                  <header>
                    <span>Experience overview</span>
                    <Users size={16} />
                  </header>
                  <div className="experience-list">
                    {experienceHighlights.map((exp) => (
                      <article key={exp.id} className="experience-item">
                        <div className="experience-role">
                          <strong>{exp.position}</strong>
                          <span>@ {exp.company}</span>
                        </div>
                        <div className="experience-meta">
                          <span>{exp.timeframe}</span>
                          <span>{exp.location}</span>
                        </div>
                        {exp.summary && <p className="experience-summary">{exp.summary}</p>}
                      </article>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="inline-link"
                    onClick={() => setActiveTab('experience')}
                  >
                    View full timeline →
                  </button>
                </section>
              </div>
            </section>
          )}

          {activeTab === 'experience' && (
            <section className="card experience-section">
              <header>
                <span>Experience timeline</span>
                <Activity size={16} />
              </header>
              <div className="experience-content">
                <ExperienceTimeline experiences={experiences} />
              </div>
            </section>
          )}

          {activeTab === 'projects' && (
            <section className="repo-container">
              <div className="repo-header">
                <div className="repo-title">
                  <GitBranch size={16} />
                  <span>project-repositories</span>
                  <span className="repo-visibility">Public</span>
                </div>
                <div className="repo-stats">
                  <span className="repo-stat">
                    <span>{projects.length} projects</span>
                  </span>
                </div>
              </div>
              <div className="packages-table">
                <table className="packages-list">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Live</th>
                      <th>Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((project) => (
                      <ProjectCard 
                        key={project.title} 
                        {...project} 
                        isExpanded={expandedProject === project.title}
                        onToggle={() => setExpandedProject(expandedProject === project.title ? null : project.title)}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeTab === 'stats' && (
            <StatsTab devStats={devStats} statsStatus={statsStatus} statsErrors={statsErrors} />
          )}

          {activeTab === 'contact' && (
            <ContactTab 
              github={github}
              leetcode={leetcode}
              wakatimeAllTime={wakatimeAllTime}
              statsStatus={statsStatus}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default HomePage;