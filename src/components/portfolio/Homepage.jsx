import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import FabNavigation from './FabNavigation';
import {projects, experiences} from '../../data/info';
import VoiceAssistant from './VoiceAssistant';
import VSCodeWindow from './VSCodeWindow';
import TypewriterText from './TypewriterText';
import ProjectCard from './ProjectCard';
import ExperienceTimeline from './ExperienceTimeline';
import ParticleBackground from './ParticleBackground';
import CodeSnippet from './CodeSnippet';
import MatrixRain from './MatrixRain';
import Game from '../game/Game';
import { GameProvider } from '../../context/GameContext';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Mail, Github, Linkedin, Terminal, Code, Coffee, Home, User, Briefcase, ArrowLeft, ArrowRight } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ['hero', 'about', 'projects', 'experience'];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const [showGame, setShowGame] = useState(false);
  const isMobile = useIsMobile();

  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };
  
  const [chunkSize, setChunkSize] = useState(1);

  useEffect(() => {
    const updateChunkSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setChunkSize(1); // Mobile
      } else if (width < 1024) {
        setChunkSize(2); // Tablet
      } else {
        setChunkSize(3); // Desktop
      }
    };

    updateChunkSize();
    window.addEventListener('resize', updateChunkSize);
    return () => window.removeEventListener('resize', updateChunkSize);
  }, []);

  const chunkedProjects = chunkArray(projects, chunkSize);

  return (
    <div style={{
        minHeight: '100vh',
        backgroundColor: 'black',
        fontSize: isMobile ? '0.875rem' : '1rem',
        color: '#d4d4d4',
        position: 'relative',
        overflow: 'hidden',
        touchAction: 'pan-y',
    }}>
      <MatrixRain />
      <ParticleBackground />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <FabNavigation onNavigate={handleNavigate} />
      <VoiceAssistant onNavigate={handleNavigate} />
      
      <main style={{ marginLeft: isMobile ? '0' : '4rem', position: 'relative', zIndex: 10 }}>
        {/* Hero Section - Enhanced Terminal Style */}
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: isMobile ? '1rem' : '2rem',
            paddingRight: isMobile ? '1rem' : '2rem',
        }}>
          <div style={{ 
            width: '100%', 
            maxWidth: isMobile ? '100%' : '96rem',
            backgroundColor: '#0a0a0a', 
            borderRadius: '8px',
            color: '#f8f8f2',
            fontFamily: "'Fira Code', monospace",
            boxShadow: '0 0 12px rgba(255, 0, 150, 0.5)', 
            border: '1px solid rgba(255, 0, 150, 0.6)',
            }}>
            <div style={{ 
                padding: isMobile ? '1rem' : '2rem', 
                lineHeight: '1.6',
                whiteSpace: 'pre-wrap',
                color: '#e1e1e6',
                }}>
              {/* Terminal Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 0, 150, 0.3)',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <Terminal style={{ width: '1.5rem', height: '1.5rem', color: '#f02eaa' }} />
                  <span style={{ fontFamily: 'monospace' }}>root@ritisa-dev:~#</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#ef4444' }}></div>
                    <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#facc15' }}></div>
                    <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '9999px', backgroundColor: '#22c55e' }}></div>
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{
                    fontSize: isMobile ? '2rem' : '3rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    fontFamily: 'monospace',
                    background: 'linear-gradient(to right, #f02eaa, #4ade80)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}>
                  &lt;RITISA/&gt;
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: isMobile ? '0.5rem' : '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                  <Code style={{ width: '1.5rem', height: '1.5rem', color: '#f02eaa' }}/>
                  <span style={{ fontFamily: 'monospace' }}><TypewriterText text="while(alive) {{ eat(); sleep(); code(); repeat(); }"/></span>
                  <Coffee style={{ width: '1.5rem', height: '1.5rem', color: '#f02eaa' }} />
                </div>
              </div>

              {/* Code Snippet Display */}
              <div style={{ margin: isMobile ? '0.5rem' : '1rem', padding: isMobile ? '1rem' : '1.5rem', boxShadow: '0 0 12px rgba(255, 0, 150, 0.2)', border: '1px solid rgba(255, 0, 150, 0.3)'}}>
                <CodeSnippet 
                  code={`const developer = {
                            name: "Ritisa Behera",
                            location: "Mumbai, India",
                            languages: ["Python", "Java", "JavaScript", "C", "SQL", "Apex"],
                            currentFocus: "Software, AI & Salesforce Development",
                            coffeeConsumed: "∞",
                            linesOfCode: "15000+",
                            bugs: { 
                                created: "many", 
                                fixed: "most" 
                            }
                            };`}
                  language="javascript"
                />
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '1rem' : '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:ritisarabindra@gmail.com" 
                style={{
                    color: '#f02eaa', // vscode-magenta
                    transition: 'color 0.3s, transform 0.3s',
                    textDecoration: 'none',
                }}>
                  <Mail style={{ width: '2rem', height: '2rem' }} />
                </a>
                <a href="https://www.linkedin.com/in/ritisa-behera-43819b258/" 
                style={{
                    color: '#f02eaa', // vscode-magenta
                    transition: 'color 0.3s, transform 0.3s',
                    textDecoration: 'none',
                }}>
                  <Linkedin style={{ width: '2rem', height: '2rem' }}/>
                </a>
                <a href="https://github.com/itisar-345" 
                style={{
                    color: '#f02eaa', // vscode-magenta
                    transition: 'color 0.3s, transform 0.3s',
                    textDecoration: 'none',
                }}>
                  <Github style={{ width: '2rem', height: '2rem' }} />
                </a>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '0.5rem' : '1rem', marginTop: '1rem', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
                <a
                  href="/Resume.pdf" 
                  download="Ritisa Behera.pdf"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem 1rem',
                    fontFamily: 'monospace',
                    backgroundColor: 'transparent', 
                    color: '#f02eaa', 
                    border: '1px solid #f02eaa',
                    borderRadius: '0.375rem',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#f02eaa'; 
                    e.currentTarget.style.color = '#ffffff'; 
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent'; 
                    e.currentTarget.style.color = '#f02eaa';           
                  }}
                >
                  <Terminal style={{ width: '1rem', height: '1rem' }} />
                  [DOWNLOAD_RESUME]
                </button>
                </a>
                {!isMobile && (
                  <button
                    onClick={() => setShowGame(prev => !prev)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem 1rem',
                      fontFamily: 'monospace',
                      backgroundColor: 'transparent', 
                      color: '#f02eaa', 
                      border: '1px solid #f02eaa',
                      borderRadius: '0.375rem',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease, color 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#f02eaa'; 
                      e.currentTarget.style.color = '#ffffff'; 
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent'; 
                      e.currentTarget.style.color = '#f02eaa';           
                    }}
                  >
                    <Terminal style={{ width: '1rem', height: '1rem' }} />
                    [PLAY & GET TO KNOW ME]
                  </button>
                )}
              </div>
              {/* Game section */}
              {!isMobile && showGame && (
                <GameProvider>
                  <div style={{ marginTop: '2rem', width: '100%', height: '90vh', background: 'linear-gradient(to bottom, #ebf8ff, #bee3f8)', overflow: 'hidden' }}>
                    <Game onCloseGame={() => setShowGame(false)} />
                  </div>
                </GameProvider>
              )}
            </div>
          </div>
          
          {/* Clean Navigation Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: isMobile ? '0.5rem' : '1rem', marginTop: '2rem' }}>
            {[
              { name: 'ABOUT', section: 'about' },
              { name: 'PROJECTS', section: 'projects' },
              { name: 'EXPERIENCE', section: 'experience' }
            ].map((item) => (
                <button 
                    key={item.name}
                    onClick={() => handleNavigate(item.section)}
                    style={{
                        fontFamily: 'monospace',
                        fontSize: '16px',
                        height: '2.5rem',
                        padding: '0.5rem 1rem',
                        border: '1px solid #f02eaa',
                        color: '#f02eaa',
                        background: 'rgba(240, 200, 225, 0.75)',
                        borderRadius: '0.375rem',
                        cursor: 'pointer',
                    }}
                >
                [{item.name}]
            </button>
            ))}
          </div>
        </section>

        {/* About Section - Enhanced with Code */}
        <section id="about" 
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '2rem 1rem' : '5rem 2rem',
            }}
        >
          <VSCodeWindow title="developer.config.js" style={{ width: '100%', maxWidth: isMobile ? '100%' : '64rem' }}>
            <div style={{ display: 'grid', gap: isMobile ? '1rem' : '2rem', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ padding:'1rem', borderRadius: '4px', backgroundColor:'#0a0a0a', boxShadow: '0 0 12px rgba(255, 0, 150, 0.2)', border: '1px solid rgba(255, 0, 150, 0.3)'}}>
                <CodeSnippet 
                  code={`
                    const aboutMe = {
                    passion: "Crafting innovative AI and full-stack solutions",
                    focus: "AI, Cloud, Salesforce Development",
                    philosophy: "Code with purpose, impact with precision",
                    motivation: "Enhancing lives through technology",
                    favoriteLang: "Python & JavaScript",
                    currentlyLearning: "Advanced LLMs & Cloud Architecture"
                    };`}
                  language="aboutme"
                />
                </div>
                <div style={{ padding:'1rem', borderRadius: '4px', backgroundColor:'#0a0a0a', boxShadow: '0 0 12px rgba(255, 0, 150, 0.2)', border: '1px solid rgba(255, 0, 150, 0.3)'}}>
                <CodeSnippet 
                  code={`
                    const techStack = {
                    frontend: ["React", "React Native", "JavaScript", "HTML/CSS", "Bootstrap", "Lightning Web Components"],
                    backend: ["Node.js", "Express", "Flask", "Apex", "MySQL", "PostgreSQL", "MongoDB"],
                    ai_ml: ["TensorFlow", "Scikit-learn", "Pandas", "NLTK", "Langchain", "LLMs"],
                    devops: ["Docker", "Kubernetes", "AWS", "Google Cloud", "IBM Cloud", "Git"],
                    tools: ["Git", "GitHub", "VSCode", "Selenium", "Google Colab"]
                    };`}
                  language="techstack"
                />
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div 
                    style={{
                        backgroundColor: '#0a0a0a', // dark editor-like background
                        borderRadius: '8px',
                        padding: '16px',
                        color: '#f8f8f2', // light text color
                        fontFamily: "'Fira Code', monospace",
                        boxShadow: '0 0 12px rgba(255, 0, 150, 0.5)', // neon magenta glow
                        border: '1px solid rgba(255, 0, 150, 0.6)', // subtle magenta border
                    }}>
                <div style={{ padding: '1rem' }}>
                    <div style={{ color: '#f02eaa', fontFamily: 'monospace', marginBottom: '1rem' }}>$ neofetch</div>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div><span style={{ color: '#f02eaa' }}>email:</span> ritisarabindra@gmail.com</div>
                    <div><span style={{ color: '#f02eaa' }}>github:</span> "github.com/itisar-345"</div>
                    <div><span style={{ color: '#f02eaa' }}>linkedin:</span> "linkedin.com/in/ritisa-behera-43819b258/"</div>
                    <div><span style={{ color: '#f02eaa' }}>location:</span> "India"</div>
                    <div><span style={{ color: '#f02eaa' }}>timezone:</span> "UTC+5:30"</div>
                    <div><span style={{ color: '#f02eaa' }}>status:</span> "available for work"</div>
                    </div>
                </div>
                </div>

                <div 
                    style={{
                        backgroundColor: '#0a0a0a', // dark editor-like background
                        borderRadius: '8px',
                        padding: '16px',
                        color: '#f8f8f2', // light text color
                        fontFamily: "'Fira Code', monospace",
                        boxShadow: '0 0 12px rgba(255, 0, 150, 0.5)', // neon magenta glow
                        border: '1px solid rgba(255, 0, 150, 0.6)', // subtle magenta border
                    }}>
                <div style={{ padding: '1rem' }}>
                    <div style={{ color: '#f02eaa', fontFamily: 'monospace', marginBottom: '1rem' }}>$ ps aux | grep interests</div>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div>machine_learning        95%   [running]</div>
                    <div>salesforce_dev         90%   [running]</div>
                    <div>full_stack_dev         85%   [running]</div>
                    <div>cloud_technologies     80%   [running]</div>
                    <div>project_management     75%   [learning]</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </VSCodeWindow>
        </section>

        {/* Projects Section - Enhanced with Code */}
        <section id="projects" 
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '2rem 1rem' : '5rem 2rem',
            }}>
          <div style={{ width: '100%', maxWidth: isMobile ? '100%' : '72rem' }}>
            <VSCodeWindow title="projects/README.md" style={{ marginBottom: '2rem' }}>
              <div style={{ textAlign: 'center' }}>
                <h2
                style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    fontFamily: 'monospace',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #f02eaa, #4ade80)',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                }}
                >
                # Featured Projects
                </h2>
                <p style={{ fontFamily: 'monospace', color: '#d4d4d4' }}>$ ls -la ~/projects/featured/</p>
            </div>
            </VSCodeWindow>

            <div style={{
              position: 'relative',
              padding: isMobile ? '0.5rem' : '1rem',
              gap: isMobile ? '1rem' : '1.5rem',
            }}>
              <Carousel
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch={true}
                swipeable={true}
                useKeyboardArrows={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                  hasPrev && (
                    <ArrowLeft
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      style={{
                        position: 'absolute',
                        zIndex: 2,
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 0, 150, 0.75)',
                        boxShadow: '0 0 12px rgba(255, 0, 150, 0.5)', 
                        border: '1px solid rgba(255, 0, 150, 0.6)',
                        color: '#1e1e1e',
                        borderRadius: '9999px',
                        width: isMobile ? '32px' : '40px',
                        height: isMobile ? '32px' : '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                    />
                  )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                  hasNext && (
                    <ArrowRight
                      type="button"
                      onClick={onClickHandler}
                      title={label}
                      style={{
                        position: 'absolute',
                        zIndex: 2,
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(255, 0, 150, 0.75)',
                        boxShadow: '0 0 12px rgba(255, 0, 150, 0.5)', 
                        border: '1px solid rgba(255, 0, 150, 0.6)',
                        color: '#1e1e1e',
                        borderRadius: '9999px',
                        width: isMobile ? '32px' : '40px',
                        height: isMobile ? '32px' : '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                    />
                  )
                }
              >
                {chunkedProjects.map((group, index) => (
                  <div key={index} style={{display: 'flex',
                    justifyContent: 'center',
                    gap: isMobile ? '1rem' : '1.5rem',
                    padding: isMobile ? '0.5rem' : '1rem',
                    flexWrap: 'wrap',
                    }}>
                    {group.map((project, idx) => (
                      <div 
                      key={idx}
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{ flex: 1, minWidth: 0 }}>
                        <ProjectCard
                          {...project}
                          isActive={hoveredIndex === null ? idx === 0 : hoveredIndex === idx}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </Carousel>
            </div>
        </div>
        </section>

        {/* Experience Section */}
        <section
            id="experience"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: isMobile ? '2rem 1rem' : '2rem',
            }}
            >
            <VSCodeWindow title="git log --oneline --graph" style={{ width: '100%', maxWidth: isMobile ? '100%' : '56rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ textAlign: 'center'}}>
                    <h2
                    style={{
                        fontSize: '1.875rem',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #f02eaa, #4ade80)',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                    >
                    # Experience Timeline
                    </h2>
                    <p style={{ fontFamily: 'monospace', color: '#d4d4d4' }}>$ git log --author="Ritisa" --pretty=oneline</p>
                </div>

                <ExperienceTimeline experiences={experiences} />
                </div>
            </VSCodeWindow>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
