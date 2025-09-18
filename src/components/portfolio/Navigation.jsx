import { useEffect, useState } from 'react';
import { Home, User, Briefcase, Code, Terminal } from 'lucide-react';

const Navigation = ({ activeSection, onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) return null;

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, command: 'cd ~' },
    { id: 'about', label: 'About', icon: User, command: 'whoami' },
    { id: 'experience', label: 'Experience', icon: Briefcase, command: 'git log' },
    { id: 'projects', label: 'Projects', icon: Code, command: 'ls -la' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100%',
        width: '5rem',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(8px)',
        borderRight: '2px solid rgba(255, 0, 150, 0.3)',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
      }}
    >
      {/* Terminal Icon */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '0.75rem',
          backgroundColor: 'rgba(255, 0, 150, 0.1)',
          border: '1px solid rgba(255, 0, 150, 0.3)',
          borderRadius: '0.5rem',
        }}
      >
        <Terminal style={{ width: 24, height: 24, color: 'rgba(255, 0, 150, 1)', animation: 'pulse 2s infinite' }} />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} style={{ position: 'relative' }}>
              <button
                onClick={() => onNavigate(item.id)}
                style={{
                  position: 'relative',
                  width: '3rem',
                  height: '3rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s ease',
                  transform: isActive ? 'scale(1.1)' : 'none',
                  backgroundColor: isActive ? 'rgba(255, 0, 150, 1)' : 'transparent',
                  color: isActive ? '#000' : 'rgba(200, 200, 200, 0.7)',
                  boxShadow: isActive ? '0 0 10px rgba(255, 0, 150, 0.5)' : 'none',
                  border: isActive ? 'none' : '1px solid transparent',
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={e => !isActive && (e.currentTarget.style.transform = 'scale(1)')}
              >
                <Icon
                  style={{
                    width: 24,
                    height: 24,
                    transition: 'all 0.3s ease',
                    animation: isActive ? 'pulse 2s infinite' : 'none',
                  }}
                />

                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '2rem',
                      backgroundColor: 'rgba(255, 0, 150, 1)',
                      borderTopRightRadius: '4px',
                      borderBottomRightRadius: '4px',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                )}

                {/* Glow overlay */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '0.75rem',
                      boxShadow: '0 0 20px rgba(255, 0, 150, 0.3)',
                      transition: 'all 0.3s ease',
                    }}
                  />
                )}
              </button>

              {/* Tooltip */}
              <div
                style={{
                  position: 'absolute',
                  left: '5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  opacity: 0,
                  pointerEvents: 'none',
                  zIndex: 50,
                }}
                className="group-hover-tooltip" // add JS logic if needed to toggle this manually
              >
                <div
                  style={{
                    backgroundColor: 'black',
                    border: '2px solid rgba(255, 0, 150, 0.5)',
                    borderRadius: '0.5rem',
                    padding: '0.75rem',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 0 10px rgba(255, 0, 150, 0.2)',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      color: 'rgba(255, 0, 150, 1)',
                      fontFamily: 'monospace',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      color: 'rgba(160, 160, 160, 0.8)',
                      fontFamily: 'monospace',
                      fontSize: '0.75rem',
                      marginTop: '0.25rem',
                    }}
                  >
                    $ {item.command}
                  </div>

                  {/* Arrow */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%) translateX(-4px)',
                      width: 0,
                      height: 0,
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent',
                      borderRight: '4px solid rgba(255, 0, 150, 0.5)',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom decoration */}
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
        <div
          style={{
            width: '2rem',
            height: '0.25rem',
            backgroundColor: 'rgba(255, 0, 150, 0.3)',
            borderRadius: '9999px',
            animation: 'pulse 2s infinite',
          }}
        />
      </div>
    </nav>
  );

};

export default Navigation;
