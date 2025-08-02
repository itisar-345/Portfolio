import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CodeSnippet = ({ code, language = 'javascript', className = '' }) => {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false); // track hover state

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`code-block ${className}`}
      style={{
        position: 'relative',
        padding: '1rem',
        borderRadius: '8px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            color: '#ff2da0',
            fontSize: '0.875rem',
            fontFamily: "'Fira Code', monospace",
          }}
        >
          {language}
        </span>

        <button
          onClick={handleCopy}
          style={{
            opacity: copied || hovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
            padding: '4px',
            borderRadius: '4px',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          {copied ? (
            <Check style={{ width: '16px', height: '16px', color: '#f02eaa' }} />
          ) : (
            <Copy style={{ width: '16px', height: '16px', color: '#e1e1e6' }} />
          )}
        </button>
      </div>

      <pre
        style={{
          fontSize: '0.875rem',
          overflowX: 'auto',
          margin: 0,
          position: 'relative',
        }}
      >
        <code
          style={{
            color: '#e1e1e6',
            fontFamily: "'Fira Code', monospace",
            whiteSpace: 'pre-wrap',
            position: 'relative',
          }}
        >
          {code}
          
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
