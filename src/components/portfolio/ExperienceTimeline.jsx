import { Calendar, GitBranch, GitCommit, Paperclip, ScrollText, Star, MapPin, FileText, ExternalLink, ChevronDown } from 'lucide-react';

const ExperienceTimeline = ({ experiences }) => {
  const getCommitType = (type) => {
    switch(type) {
      case 'Internship': return 'init';
      case 'Leadership': return 'feat';
      case 'Full-Time': return 'release';
      default: return 'feat';
    }
  };

  const groupedExperiences = experiences.reduce((acc, exp) => {
    const type = exp.type || 'Full-Time';
    if (!acc[type]) acc[type] = [];
    acc[type].push(exp);
    return acc;
  }, {});

  const typeOrder = ['Full-Time', 'Internship', 'Leadership'];
  const orderedTypes = typeOrder.filter(type => groupedExperiences[type]);

  const renderCommitContainer = (type, exps) => (
    <div key={type} className="commits-container">
      <div className="commits-header">
        <GitCommit size={16} />
        <span>{exps.length} {type.toLowerCase()} commits</span>
      </div>
      
      {exps.map((exp) => (
        <details key={exp.id} className="commit-detail">
          <summary className="commit-row">
            <div className="commit-message-section">
              <span className="commit-type">{getCommitType(type)}:</span>
              <span className="commit-title">{exp.position}</span>
              <span className="commit-scope">@ {exp.company}</span>
            </div>
            
            <div className="commit-meta-section">
              <ChevronDown size={14} className="expand-icon" />
              <span className="commit-time">{exp.startDate} - {exp.endDate}</span>
              <span className="commit-hash">{exp.id.substring(0, 7)}</span>
            </div>
          </summary>
          
          <div className="commit-diff">
            <div className="diff-header">
              <span className="diff-stats">+{exp.description.length} additions, +{exp.technologies.length} files</span>
              <span className="diff-location">
                <MapPin size={12} />
                {exp.location}
              </span>
            </div>
            
            <div className="diff-content">
              {exp.description.map((desc, i) => (
                <div key={i} className="diff-line added">
                  <span className="line-number">+{i + 1}</span>
                  <span className="line-content">{desc}</span>
                </div>
              ))}
            </div>
            
            <div className="diff-files">
              <div className="file-header">Technologies & Tools:</div>
              <div className="file-list">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="file-item">{tech}</span>
                ))}
              </div>
            </div>
            
            {exp.documents && (
              <div className="commit-assets">
                <div className="assets-header"><Paperclip size={12}/> Attachments:</div>
                {exp.documents.map((doc, i) => (
                  <a key={i} href={doc.url} target="_blank" rel="noreferrer" className="asset-link">
                    <ScrollText size={12}/> {doc.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </details>
      ))}
    </div>
  );

  return (
    <div className="repo-container">
      <div className="repo-header">
        <div className="repo-title">
          <GitBranch size={16} />
          <span>professional-experience</span>
          <span className="repo-visibility">Public</span>
        </div>
        <div className="repo-stats">
          <span className="repo-stat">
            <Star size={14} />
            {experiences.length} experiences
          </span>
        </div>
      </div>
      
      {orderedTypes.map(type => renderCommitContainer(type, groupedExperiences[type]))}
    </div>
  );
};

export default ExperienceTimeline;