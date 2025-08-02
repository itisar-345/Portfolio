import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CompletionScreen = ({ gems, onViewCollection, onCloseGame }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (onCloseGame) {
      onCloseGame();
    } else {
      navigate('/');
    }
  };

  const skillCount = gems.filter((g) => g.type === 'skill').length;
  const projectCount = gems.filter((g) => g.type === 'project').length;
  const achievementCount = gems.filter((g) => g.type === 'achievement').length;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Navigate to Homepage
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Dark Overlay (clicking closes the modal) */}
      <div
        onClick={handleClose}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}
      />

      <div
        style={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          padding: '2rem',
          maxWidth: '42rem',
          width: '100%',
          zIndex: 1010,
          animation: 'fade-scale 0.3s ease-in-out',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            padding: '0.25rem',
            borderRadius: '9999px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          aria-label="Close Completion Screen"
        >
          <X size={20} />
        </button>

        <h2
          style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '1.5rem',
          }}
        >
          Journey Complete! 🎉
        </h2>
        <p
          style={{
            color: '#4b5563',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          You've collected all the gems and completed my portfolio quest!
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              padding: '1rem',
              backgroundColor: '#ecfdf5',
              borderRadius: '0.5rem',
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669' }}>
              {skillCount}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#065f46' }}>Skills</div>
          </div>
          <div
            style={{
              textAlign: 'center',
              padding: '1rem',
              backgroundColor: '#fffbeb',
              borderRadius: '0.5rem',
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#d97706' }}>
              {projectCount}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#92400e' }}>Projects</div>
          </div>
          <div
            style={{
              textAlign: 'center',
              padding: '1rem',
              backgroundColor: '#f5f3ff',
              borderRadius: '0.5rem',
            }}
          >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7c3aed' }}>
              {achievementCount}
            </div>
            <div style={{ fontSize: '0.875rem', color: '#5b21b6' }}>Achievements</div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            onClick={onViewCollection}
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
          >
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;
