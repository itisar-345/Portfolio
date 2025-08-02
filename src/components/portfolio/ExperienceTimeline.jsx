import { Calendar, MapPin } from 'lucide-react';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {experiences.map((exp, index) => (
        <div key={exp.id} style={{ position: 'relative' }}>
          {/* Git log style header */}
          <div
            style={{
              backgroundColor: '#0a0a0a',
              padding: '16px',
              borderRadius: '8px',
              fontFamily: "'Fira Code', monospace",
              color: '#e1e1e6',
              boxShadow: '0 0 12px rgba(255, 0, 150, 0.15)',
              border: '1px solid rgba(255, 0, 150, 0.3)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}
            >
              <div style={{ color: '#f02eaa', fontWeight: '600' }}>
                commit {exp.id.substring(0, 8)}
              </div>
              <div
                style={{
                  color: '#999',
                  fontSize: '0.875rem',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Calendar style={{ width: '16px', height: '16px', marginRight: '4px' }} />
                {exp.startDate} - {exp.endDate}
              </div>
            </div>

            <div
              style={{
                borderLeft: '2px solid #f02eaa',
                paddingLeft: '16px',
              }}
            >
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#e1e1e6' }}>
                {exp.position}
              </h3>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#999',
                  marginBottom: '8px',
                  fontSize: '0.875rem',
                }}
              >
                <span style={{ color: '#f02eaa' }}>{exp.company}</span>
                <MapPin style={{ width: '16px', height: '16px', margin: '0 8px' }} />
                <span>{exp.location}</span>
              </div>

              <ul style={{ marginBottom: '12px' }}>
                {exp.description.map((desc, i) => (
                  <li key={i} style={{ color: '#e1e1e6', fontSize: '0.875rem', marginBottom: '4px' }}>
                    <span style={{ color: '#22c55e', marginRight: '8px' }}>+</span>
                    {desc}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '4px 8px',
                      backgroundColor: '#1e1e1e',
                      border: '1px solid #333',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      color: '#999',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Connection line */}
          {index < experiences.length - 1 && (
            <div
              style={{
                width: '1px',
                height: '24px',
                backgroundColor: '#333',
                marginLeft: '16px',
                marginTop: '8px',
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
