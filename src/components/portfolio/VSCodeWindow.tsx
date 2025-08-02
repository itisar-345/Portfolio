import React from 'react';
import { X, Minus, Square } from 'lucide-react';

interface VSCodeWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const VSCodeWindow: React.FC<VSCodeWindowProps> = ({ title, children, className = '' }) => {
  return (
    <div style={{ borderRadius: '0.5rem', boxShadow: '0 0 12px rgba(255, 0, 150, 0.5)', border: '1px solid rgba(255, 0, 150, 0.6)', overflow: 'hidden', ...className && {} }}>
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#1e1e1e', // vscode-bg-tertiary
          padding: '0.5rem 1rem',
          borderBottom: '1px solid #3c3c3c' // vscode-border
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#ff5f56' }}></div>
            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#ffbd2e' }}></div>
            <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#27c93f' }}></div>
          </div>
          <span style={{ fontSize: '0.875rem', color: '#9ca3af', marginLeft: '1rem' }}>{title}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9ca3af' }}>
          <Minus
            style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e5e7eb')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          />
          <Square
            style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e5e7eb')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          />
          <X
            style={{ width: '1rem', height: '1rem', cursor: 'pointer' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#e5e7eb')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', backgroundColor: '#1e1e1e' }} className={className}>
        {children}
      </div>
    </div>

  );
};

export default VSCodeWindow;
