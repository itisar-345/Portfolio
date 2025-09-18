import { useState, useEffect } from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

const TypewriterText = ({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = '' 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const isMobile = useIsMobile();

  const adjustedSpeed = isMobile ? speed * 1.5 : speed;

  useEffect(() => {
      setDisplayText('');
      setCurrentIndex(0);
      setShowCursor(true);
    }, [text]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowCursor(false);
      }
    }, delay + currentIndex * adjustedSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, adjustedSpeed]);

  useEffect(() => {
    // Only blink cursor while typing is in progress
    if (currentIndex < text.length) {
      const cursorTimer = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);

      return () => clearInterval(cursorTimer);
    }
  }, [currentIndex, text.length]); 

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span style={{ color: 'rgba(255, 0, 150, 0.3)' }}>|</span>}
    </span>
  );
};

export default TypewriterText;
