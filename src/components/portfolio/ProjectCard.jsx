import { useRef } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const ProjectCard = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  isActive = false,
  imageUrl
}) => {
  const isMobile = useIsMobile();

  // Handlers for hover effects on buttons (for outline)
  const handleOutlineMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#f02eaa'
    e.currentTarget.style.color = '#000'
  }
  const handleOutlineMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent'
    e.currentTarget.style.color = '#f02eaa'
  }

  // Handlers for hover effects on buttons (for solid)
  const handleSolidMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = '#e0268e'
  }
  const handleSolidMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = '#f02eaa'
  }

  const tabRef = useRef(null);

  return (
    <div
      style={{
        transition: 'all 0.3s ease',
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        borderRadius: '6px',
        overflow: 'hidden',
        maxWidth: isMobile ? '100%' : '480px',
        backgroundColor: '#1e1e1e',
        boxShadow: '0 0 12px rgba(255, 0, 150, 0.2)', 
        border: '1px solid rgba(255, 0, 150, 0.3)',
      }}
      onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          if (!isActive && tabRef.current) {
            tabRef.current.style.borderBottom = '2px solid #f02eaa';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          if (!isActive && tabRef.current) {
            tabRef.current.style.borderBottom = '2px solid transparent';
          }
        }}
    >
      {/* Tab bar */}
      <div style={{ display: 'flex', backgroundColor: '#252526' }}>
        <div
          ref={tabRef}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: isMobile ? '0.5rem 0.75rem' : '0.5rem 1rem',
            backgroundColor: isActive ? '#1e1e1e' : 'transparent',
            borderBottom: isActive ? '2px solid #f02eaa' : '2px solid transparent',
            color: '#d4d4d4dd',
            fontSize: isMobile ? '12px' : '14px',
          }}
        >
          <Code style={{ width: '16px', height: '16px', marginRight: '8px' }} />
          <span>{`${title.toLowerCase().replace(/\s+/g, '_')}.md`}</span>
        </div>
        <div style={{ flex: 1, backgroundColor: '#1e1e1e' }}></div>
      </div>

      
      {/* Content */}
      <div style={{ padding: isMobile ? '1rem' : '1.5rem', backgroundColor: '#1e1e1e' }}>
        {/* Project Title */}
        <div style={{ marginBottom: '1rem', padding: isMobile ? '0.75rem' : '1rem', backgroundColor:'#0a0a0a', borderRadius: '4px', boxShadow: '0 0 12px rgba(255, 0, 150, 0.1)', border: '1px solid rgba(255, 0, 150, 0.2)'  }}>
          <div
            style={{
              color: '#ff2da0',
              fontFamily: 'monospace',
              fontSize: isMobile ? '14px' : '16px',
            }}
          >
            //{title}
          </div>
          <div style={{ marginTop: '0.5rem', color: '#e1e1e6', fontFamily: 'monospace', fontSize: isMobile ? '12px' : '14px' , whiteSpace: 'pre-line', overflowY: 'auto', flex: 1, }}>{description}</div>
        </div>

        {imageUrl && (
          <div
            style={{
              marginBottom: '1rem',
              border: '1px solid rgba(255, 0, 150, 0.3)',
              borderRadius: '0.5rem',
              overflow: 'hidden'
            }}
          >
            <img
              src={imageUrl}
              alt={title}
              style={{
                width: '100%',
                height: '12rem', // 48 * 4 = 192px = 12rem
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          </div>
        )}


        {/* Tech Stack */}
        <div style={{ marginBottom: '1rem', padding: isMobile ? '0.5rem' : '1rem', backgroundColor:'#0a0a0a', borderRadius: '4px', boxShadow: '0 0 12px rgba(255, 0, 150, 0.1)', border: '1px solid rgba(255, 0, 150, 0.2)'  }}>
          <div style={{ color: '#ff2da0', fontFamily: 'monospace', fontSize: isMobile ? '12px' : '14px' }}>
            // Technologies used
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '0.5rem',
            }}
          >
            {techStack.map((tech, index) => (
              <span
                key={index}
                style={{
                  padding: '4px 12px',
                  backgroundColor: '#000',
                  border: '1px solid #f02eaa',
                  borderRadius: '6px',
                  fontFamily: 'monospace',
                  fontSize: isMobile ? '10px' : '12px',
                  color: '#f02eaa',
                  cursor: 'default',
                  transition: 'background-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f02eaa'
                  e.currentTarget.style.color = '#000'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#000'
                  e.currentTarget.style.color = '#f02eaa'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
              display: 'flex', 
              gap: isMobile ? '8px' : '12px', 
            }}>
              {githubUrl && (
                <button
                  type="button"
                  style={{
                    border: '1px solid #f02eaa',
                    backgroundColor: 'transparent',
                    color: '#f02eaa',
                    fontFamily: 'monospace',
                    fontSize: isMobile ? '12px' : '14px',
                    padding: isMobile ? '6px 12px' : '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? '4px' : '8px',
                    transition: 'all 0.2s ease',
                    minWidth: isMobile ? 'auto' : '120px',
                    height: isMobile ? '32px' : '40px',
                  }}
                  onMouseEnter={handleOutlineMouseEnter}
                  onMouseLeave={handleOutlineMouseLeave}
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'inherit', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: isMobile ? '4px' : '8px', 
                      textDecoration: 'none',
                      fontSize: 'inherit',
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    <Github style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
                    git clone
                  </a>
                </button>
              )}
              {liveUrl && (
                <button
                  type="button"
                  style={{
                    backgroundColor: '#ff2da0',
                    color: '#000',
                    fontFamily: 'monospace',
                    fontSize: isMobile ? '12px' : '14px',
                    padding: isMobile ? '6px 12px' : '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? '4px' : '8px',
                    border: 'none',
                    transition: 'all 0.2s ease',
                    minWidth: isMobile ? 'auto' : '120px',
                    height: isMobile ? '32px' : '40px',
                  }}
                  onMouseEnter={handleSolidMouseEnter}
                  onMouseLeave={handleSolidMouseLeave}
                >
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'inherit', 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: isMobile ? '4px' : '8px', 
                      textDecoration: 'none',
                      fontSize: 'inherit',
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    <ExternalLink style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }} />
                    ./run.sh
                  </a>
                </button>
              )}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
