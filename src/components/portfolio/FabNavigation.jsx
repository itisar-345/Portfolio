import { useState, useEffect } from 'react';
import {
  Home,
  Briefcase,
  User,
  Code,
  Terminal,
  XCircle,
} from 'lucide-react';

const FabNavigation = ({ onNavigate }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const actions = [
    { id: 'hero', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
  ];

  if (!isMobile) return null;

  return (
    <div style={{ position: 'fixed', bottom: 24, left: 24, zIndex: 50 }}>
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          {actions.map((action) => {
            const isHovered = hoveredId === action.id;
            const isDefaultGlowing = !hoveredId && action.id === 'hero';

            return (
              <button
                key={action.id}
                onClick={() => {
                  onNavigate(action.id);
                  setOpen(false);
                }}
                onMouseEnter={() => setHoveredId(action.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: '#1e1e1e',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow:
                    isHovered || isDefaultGlowing
                      ? '0 0 12px 4px rgba(255, 0, 150, 0.8)'
                      : '0 0 6px rgba(0, 0, 0, 0.2)',
                  transition: 'box-shadow 0.2s ease',
                  color: isHovered || isDefaultGlowing ? '#f02eaa' : '#ffffff',
                }}
              >
                {action.icon}
              </button>
            );
          })}
        </div>
      )}

      {/* Toggle FAB */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#1e1e1e',
          border: '1px solid #f02eaa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 12px rgba(255, 0, 150, 0.3)',
          cursor: 'pointer',
          color: '#f02eaa',
        }}
      >
        {open ? <XCircle size={22} /> : <Terminal size={22} />}
      </button>
    </div>
  );
};

export default FabNavigation;
