import React, { useState } from 'react';
import { X, Minus, Square } from 'lucide-react';

interface VSCodeWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const VSCodeWindow: React.FC<VSCodeWindowProps> = ({ title, children, className = '', style = {} }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isClosed) return null;

  return (
    <div style={{ 
      borderRadius: isMaximized ? '0' : '0.5rem', 
      boxShadow: isMaximized ? 'none' : '0 0 12px rgba(255, 0, 150, 0.5)', 
      border: '1px solid rgba(255, 0, 150, 0.6)', 
      overflow: 'hidden',
      position: isMaximized ? 'fixed' : 'relative',
      top: isMaximized ? '0' : 'auto',
      left: isMaximized ? '0' : 'auto',
      right: isMaximized ? '0' : 'auto',
      bottom: isMaximized ? '0' : 'auto',
      width: isMaximized ? '100vw' : 'auto',
      height: isMaximized ? '100vh' : 'auto',
      margin: isMaximized ? '0' : 'auto',
      zIndex: isMaximized ? 999999 : 'auto',
      transition: 'all 0.2s ease',
      backgroundColor: '#1e1e1e',
      ...style 
    }}>
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1e1e1e', // vscode-bg-tertiary
          padding: isMobile ? '0.5rem 0.75rem' : '0.5rem 1rem',
          borderBottom: '1px solid #3c3c3c' // vscode-border
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#ff5f56' }}></div>
            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#ffbd2e' }}></div>
            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#27c93f' }}></div>
          </div>
          <span style={{ fontSize: isMobile ? '0.75rem' : '0.875rem', color: '#9ca3af', marginLeft: isMobile ? '0.5rem' : '1rem' }}>{title}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
          <Minus
            style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
            onClick={() => setIsMinimized(!isMinimized)}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e5e7eb')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          />
          <Square
            style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
            onClick={() => setIsMaximized(!isMaximized)}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e5e7eb')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          />
          <X
            style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
            onClick={() => setIsClosed(true)}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e5e7eb')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          />
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div style={{ 
          padding: isMobile ? '1rem' : '1.5rem', 
          backgroundColor: '#1e1e1e',
          height: isMaximized ? 'calc(100vh - 50px)' : 'auto',
          maxHeight: isMaximized ? 'calc(100vh - 50px)' : 'none',
          overflow: isMaximized ? 'auto' : 'visible',
          width: isMaximized ? '100vw' : 'auto'
        }} className={className}>
          {children}
        </div>
      )}
    </div>

  );
};

export default VSCodeWindow;
