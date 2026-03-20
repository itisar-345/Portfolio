import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingParticles = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particles = useMemo(() => {
    if (windowDimensions.width === 0) return [];
    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      startX: Math.random() * windowDimensions.width,
      startY: Math.random() * windowDimensions.height + 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }, [windowDimensions.width, windowDimensions.height]);

  if (windowDimensions.width === 0) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            backgroundColor: `rgba(139, 92, 246, ${p.opacity})`,
            boxShadow: `0 0 ${p.size * 2}px rgba(139, 92, 246, ${p.opacity + 0.2})`,
            x: p.startX,
          }}
          initial={{ y: p.startY, opacity: 0 }}
          animate={{
            y: [p.startY, -50],
            x: [p.startX, p.startX + (Math.random() * 100 - 50)],
            opacity: [0, p.opacity, p.opacity, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
