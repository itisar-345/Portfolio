import { useState, useEffect, useRef } from 'react';
import TypewriterText from './TypewriterText';
import { useIsMobile } from '../../hooks/use-mobile';
import { ExternalLink, Mail, Github, Linkedin, Phone, Code, Codepen, Target, BookOpen, CheckCircle, User, FileText, Terminal } from 'lucide-react';

const SplitTerminal = () => {
  const [leftLogs, setLeftLogs] = useState([]);
  const [rightLogs, setRightLogs] = useState([]);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [allContentLoaded, setAllContentLoaded] = useState(false);

  const leftTerminalRef = useRef(null);
  const rightTerminalRef = useRef(null);

  const isMobile = useIsMobile();

  const systemStatusLogs = [
    { id: '1', text: '$ systemctl status career', delay: 0 },
    { id: '2', text: '[ACTIVE] Final-year IT student | Seeking Software Engineer roles', delay: 15, type: 'success' },
    { id: '3', text: '', delay: 10 },
    { id: '4', text: '$ cat /home/ritisa/.contact', delay: 10 },
    { id: '5', text: 'Email: ritisarabindra@gmail.com', delay: 0, type: 'info', link: 'mailto:ritisarabindra@gmail.com', icon: Mail },
    { id: '6', text: 'LinkedIn: linkedin.com/in/ritisa-behera-43819b258', delay: 0, type: 'info', link: 'https://linkedin.com/in/ritisa-behera-43819b258', icon: Linkedin },
    { id: '7', text: 'GitHub: github.com/itisar-345', delay: 0, type: 'info', link: 'https://github.com/itisar-345', icon: Github },
    { id: '8', text: 'LeetCode: leetcode.com/u/ritisa-345', delay: 0, type: 'info', link: 'https://leetcode.com/u/ritisa-345', icon: Code },
    { id: '9', text: 'Phone: +91 8104794060', delay: 0, type: 'info', link: 'tel:+918104794060', icon: Phone },
    { id: '10', text: '', delay: 10 },
    { id: '11', text: '$ cat /etc/goals.conf', delay: 10 },
    { id: '12', text: '● Design & build scalable AI solutions', delay: 15 },
    { id: '13', text: '● Contribute to open source & research', delay: 15 },
    { id: '14', text: '● Advanced ML, DevOps & System Design', delay: 15 },
    { id: '15', text: '', delay: 10 },
    { id: '16', text: '$ systemctl is-active readiness', delay: 15 },
    { id: '17', text: '[SUCCESS] Open to onsite/remote/hybrid roles', delay: 20, type: 'success'},
    { id: '18', text: '', delay: 0 },
  ];

  const techLogs = [
    { id: '1', text: '$ npm list --global --depth=0', delay: 5 },
    { id: '2', text: '', delay: 10 },
    { id: '3', text: '├── languages@latest', delay: 15, type: 'success' },
    { id: '4', text: '│   ├── C', delay: 20 },
    { id: '5', text: '│   ├── Java', delay: 20 },
    { id: '6', text: '│   ├── Python', delay: 20 },
    { id: '7', text: '│   ├── Javascript', delay: 25 },
    { id: '8', text: '│   └── Apex', delay: 25 },
    { id: '9', text: '├── frameworks@latest', delay: 30, type: 'success' },
    { id: '10', text: '│   ├── React', delay: 35 },
    { id: '11', text: '│   ├── Node', delay: 35 },
    { id: '12', text: '│   ├── Flask', delay: 35 },
    { id: '13', text: '│   ├── Spring Boot', delay: 40 },
    { id: '14', text: '│   └── Maven', delay: 40 },
    { id: '15', text: '├── ai-ml-stack@latest', delay: 45, type: 'success' },
    { id: '16', text: '│   ├── Scikit-learn', delay: 50 },
    { id: '17', text: '│   ├── Pandas', delay: 50 },
    { id: '18', text: '│   ├── NLTK', delay: 55 },
    { id: '19', text: '│   ├── Langchain', delay: 55 },
    { id: '20', text: '│   └── LLMs', delay: 55 },
    { id: '21', text: '├── devops-suite@latest', delay: 60, type: 'success' },
    { id: '22', text: '│   ├── Git', delay: 65 },
    { id: '23', text: '│   ├── Docker', delay: 65 },
    { id: '24', text: '│   ├── Kubernetes', delay: 65 },
    { id: '25', text: '│   ├── Jenkins', delay: 70 },
    { id: '26', text: '│   └── Selenium', delay: 70 },
    { id: '27', text: '├── cloud-platforms@latest', delay: 85, type: 'success' },
    { id: '28', text: '│   ├── Google Cloud', delay: 90 },
    { id: '29', text: '│   ├── AWS', delay: 90 },
    { id: '30', text: '│   ├── IBM Cloud', delay: 95 },
    { id: '31', text: '│   └── Firebase', delay: 95 },
    { id: '32', text: '├── databases@latest', delay: 100, type: 'success' },
    { id: '33', text: '│   ├── MySQL', delay: 105 },
    { id: '34', text: '│   ├── PostgreSQL', delay: 105 },
    { id: '35', text: '│   └── MongoDB', delay: 105 },
    { id: '36', text: '└── crm-ecosystem@latest', delay: 110, type: 'success' },
    { id: '37', text: '    └── Salesforce', delay: 115 }
  ];

  // Auto-scroll effect
  useEffect(() => {
    if (leftIndex < systemStatusLogs.length) {
      const timer = setTimeout(() => {
        setLeftLogs(prev => [...prev, systemStatusLogs[leftIndex]]);
        setLeftIndex(prev => prev + 1);
        setTimeout(() => {
          if (leftTerminalRef.current && !allContentLoaded) {
            leftTerminalRef.current.scrollTop = leftTerminalRef.current.scrollHeight;
          }
        }, 50);
      }, systemStatusLogs[leftIndex].delay);
      return () => clearTimeout(timer);
    } else if (rightIndex >= techLogs.length) {
      setAllContentLoaded(true);
      setTimeout(() => {
        if (leftTerminalRef.current) {
          leftTerminalRef.current.scrollTop = 0;
        }
        if (rightTerminalRef.current) {
          rightTerminalRef.current.scrollTop = 0;
        }
      }, 100);
    }
  }, [leftIndex, allContentLoaded]);

  useEffect(() => {
    if (rightIndex < techLogs.length) {
      const timer = setTimeout(() => {
        setRightLogs(prev => [...prev, techLogs[rightIndex]]);
        setRightIndex(prev => prev + 1);
        setTimeout(() => {
          if (rightTerminalRef.current && !allContentLoaded) {
            rightTerminalRef.current.scrollTop = rightTerminalRef.current.scrollHeight;
          }
        }, 50);
      }, techLogs[rightIndex].delay);
      return () => clearTimeout(timer);
    } else if (leftIndex >= systemStatusLogs.length) {
      setAllContentLoaded(true);
      setTimeout(() => {
        if (leftTerminalRef.current) {
          leftTerminalRef.current.scrollTop = 0;
        }
        if (rightTerminalRef.current) {
          rightTerminalRef.current.scrollTop = 0;
        }
      }, 100);
    }
  }, [rightIndex, allContentLoaded]);

  const getLogColor = (type) => {
    switch (type) {
      case 'success': return '#4ade80';
      case 'info': return '#00a5ff';
      default: return '#e1e1e6';
    }
  };

  const handleLinkClick = (url, event) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gridTemplateRows: isMobile ? 'auto auto' : '1fr',
        gap: '1.5rem',
        minHeight: isMobile ? 'auto' : '600px',
        maxHeight: isMobile ? 'none' : '80vh',
      }}
    >
      {/* Left Terminal */}
      <div style={{ backgroundColor: '#0a0a0a', borderRadius: '6px', display: 'flex', flexDirection: 'column', minHeight: isMobile ? '300px' : 'auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.75rem',
          borderBottom: '1px solid rgba(240,46,170,0.3)'
        }}>
          <span style={{ color: '#f02eaa', fontFamily: 'monospace', fontSize: isMobile ? '14px' : '16px' }}>system-status.log</span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#facc15' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
          </div>
        </div>
        <div
          ref={leftTerminalRef}
          className="terminal-scroll"
          style={{ 
            padding: '1rem', 
            fontFamily: 'monospace', 
            fontSize: isMobile ? '12px' : '14px' , 
            color: '#d4d4d4', 
            flexGrow: 1, 
            overflowY: 'auto',
            maxHeight: 'calc(80vh - 60px)',
            scrollBehavior: 'smooth'
          }}
        >
          {leftLogs.map(log => (
            <div key={log.id} style={{ marginBottom: '4px', color: getLogColor(log.type), display: 'flex', alignItems: 'flex-start' }}>
              {log.text ? (
                <>
                  {log.icon && (
                    <log.icon 
                      size={16} 
                      style={{ 
                        marginRight: '8px', 
                        flexShrink: 0,
                        marginTop: '2px'
                      }} 
                    />
                  )}
                  <TypewriterText text={log.text} speed={5} delay={0} />
                  {log.link && (
                    <a
                      href={log.link}
                      onClick={(e) => handleLinkClick(log.link, e)}
                      style={{
                        marginLeft: '8px',
                        color: '#f02eaa',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        opacity: 0.7,
                        transition: 'opacity 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0.7';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      title="Open link"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </>
              ) : (
                <div style={{ height: '16px' }} />
              )}
            </div>
          ))}
          {leftIndex >= systemStatusLogs.length && (
            <div style={{ color: '#f02eaa', marginTop: '8px', animation: 'blink 1s step-start infinite' }}>
              $ _
            </div>
          )}
        </div>
      </div>

      {/* Right Terminal */}
      <div style={{ backgroundColor: '#0a0a0a', borderRadius: '6px', display: 'flex', flexDirection: 'column', minHeight: isMobile ? '300px' : 'auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.75rem',
          borderBottom: '1px solid rgba(240,46,170,0.3)'
        }}>
          <span style={{ color: '#f02eaa', fontFamily: 'monospace', fontSize: isMobile ? '14px' : '16px'  }}>tech-stack.log</span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#facc15' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
          </div>
        </div>
        <div
          ref={rightTerminalRef}
          className="terminal-scroll"
          style={{ 
            padding: '1rem', 
            fontFamily: 'monospace', 
            fontSize: isMobile ? '12px' : '14px' , 
            color: '#d4d4d4', 
            flexGrow: 1, 
            overflowY: 'auto',
            maxHeight: 'calc(80vh - 60px)',
            scrollBehavior: 'smooth'
          }}
        >
          {rightLogs.map(log => (
            <div key={log.id} style={{ marginBottom: '4px', color: getLogColor(log.type) }}>
              {log.text ? <TypewriterText text={log.text} speed={20} delay={0} /> : <div style={{ height: '16px' }} />}
            </div>
          ))}
          {rightIndex >= techLogs.length && (
            <div style={{ color: '#f02eaa', marginTop: '8px', animation: 'blink 1s step-start infinite' }}>
              $ _
            </div>
          )}
        </div>
      </div>

      {/* Blink animation */}
      <style>{`
        .terminal-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-scroll::-webkit-scrollbar-thumb {
          background-color: #f02eaa;
          border-radius: 6px;
        }
        .terminal-scroll::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        @media (max-width: 1024px) {
          .split-terminal-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto auto;
          }
        }
      `}</style>
    </div>
  );
};

export default SplitTerminal;
