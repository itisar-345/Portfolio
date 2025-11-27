import { ExternalLink, Github, Code, Package, ChevronDown, Zap } from 'lucide-react';

const parseDescription = (text = '') =>
  text
    .split('\n')
    .map((line) => line.replace(/^•\s*/, '').trim())
    .filter(Boolean);

const ProjectCard = ({ title, description, techStack = [], githubUrl, liveUrl, imageUrl, isExpanded, onToggle }) => {
  const descriptionLines = parseDescription(description);

  return (
    <>
      <tr className="package-row clickable" onClick={onToggle}>
        <td className="package-cell">
          <div className="package-info">
            <div className="package-header">
              <Package size={16} className="package-icon" />
              <span className="package-name">{title}</span>
            </div>
            <div className="package-description-row">
              <p className="package-description">{descriptionLines[0]}</p>
              <ChevronDown 
                size={14} 
                className={`expand-icon ${isExpanded ? 'expanded' : ''}`}
              />
            </div>
            {!isExpanded && (
              <>
                <div className="package-tech-stack">
                  {techStack.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                  {techStack.length > 3 && (
                    <span className="tech-badge more">+{techStack.length - 3}</span>
                  )}
                </div>
              </>
            )}
          </div>
        </td>
        <td className="package-cell">
          {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer" className="package-action" title="Live Site">
                <ExternalLink size={14} />
              </a>
            )}
        </td>
        <td className="package-cell">
          <div className="package-actions" onClick={(e) => e.stopPropagation()}>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer" className="package-action" title="View Source">
                <Github size={14} />
              </a>
            )}
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr className="package-details">
          <td colSpan="3">
            <div className="details-content">
              <div className="details-section">
                <h4>Features</h4>
                <ul className="features-list">
                  {descriptionLines.slice(1).map((line, index) => (
                    <li key={index}>
                      <Zap size={12} />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="tech-stack-expanded">
                  <h5>Tech Stack</h5>
                  <div className="tech-grid">
                    {techStack.map((tech, index) => (
                      <span key={index} className="tech-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="details-section">
                <h4>Preview</h4>
                {imageUrl ? (
                  <img src={imageUrl} alt={title} className="project-preview-img" />
                ) : (
                  <div className="no-preview">No preview available</div>
                )}
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default ProjectCard;