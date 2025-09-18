import { useState, useEffect } from 'react';
import TypewriterText from './TypewriterText';
import { useIsMobile } from '../../hooks/use-mobile';

const TerminalSimulator = () => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const isMobile = useIsMobile();

  const terminalSequence = [
    { id: '1', type: 'command', text: '$ whoami', delay: 0 },
    { id: '2', type: 'response', text: 'Ritisa Behera', delay: 50 },
    { id: '3', type: 'command', text: '$ role --current', delay: 100 },
    { id: '4', type: 'response', text: 'Full-Stack Developer | DevOps Practitioner | AI Enthusiast ', delay: 150 },
    { id: '5', type: 'command', text: '$ skills --top', delay: 200 },
    { id: '6', type: 'response', text: 'Java | Python | Javascript | Cloud | AI', delay: 150 },
    { id: '7', type: 'command', text: '$ status', delay: 300 },
    { id: '8', type: 'response', text: 'Actively seeking SOFTWARE ENGINEERING roles ', delay: 200 }
  ];

  useEffect(() => {
    if (currentLineIndex < terminalSequence.length) {
      const currentLine = terminalSequence[currentLineIndex];
      const timer = setTimeout(() => {
        setVisibleLines(prev => [...prev, currentLine]);
        setCurrentLineIndex(prev => prev + 1);
      }, currentLine.delay);

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex]);

  return (
    <div
      style={{
        backgroundColor: '#000',
        borderRadius: '6px',
        width: '100%',
        maxWidth: '100%',
        overflowX: 'auto',
      }}
    >
      <div
        style={{
          padding: isMobile ? '8px' : '12px',
          fontFamily: 'monospace',
          fontSize: isMobile ? '14px' : '16px', 
          minHeight: isMobile ? '150px' : '180px',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}
      >
        {visibleLines.map((line) => (
          <div key={line.id} style={{ marginBottom: '6px' }}>
            {line.type === 'command' ? (
              <div style={{ color: '#f02eaa' }}>
                <TypewriterText 
                  text={line.text} 
                  speed={5}
                  delay={0}
                />
              </div>
            ) : (
              <div style={{ color: '#f8f8f2', marginLeft: '8px' }}>
                <TypewriterText 
                  text={line.text} 
                  speed={5}
                  delay={5}
                />
              </div>
            )}
          </div>
        ))}
        {currentLineIndex >= terminalSequence.length && (
          <div
            style={{
              color: '#f02eaa',
              animation: 'blink 1s step-start infinite'
            }}
          >
            <span>$ _</span>
          </div>
        )}
      </div>

    </div>
  );
};

export default TerminalSimulator;
