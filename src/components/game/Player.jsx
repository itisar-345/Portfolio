import { useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { handlePlayerMovement } from '../../utils/physics';

const Player = () => {
  const { gameState, updatePlayerPosition, updatePlayerVelocity } = useGame();
  const { player } = gameState;

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          updatePlayerVelocity({ x: -5, y: player.velocity.y });
          break;
        case 'ArrowRight':
          updatePlayerVelocity({ x: 5, y: player.velocity.y });
          break;
        case 'ArrowUp':
        case ' ':
          if (player.isGrounded) {
            updatePlayerVelocity({ x: player.velocity.x, y: -25 });
          }
          break;
      }
    };

    const handleKeyUp = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowRight':
          updatePlayerVelocity({ x: 0, y: player.velocity.y });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [player, updatePlayerVelocity]);

  // Apply physics
  useEffect(() => {
    const gameLoop = setInterval(() => {
      handlePlayerMovement(gameState, updatePlayerPosition, updatePlayerVelocity);
    }, 1000 / 60); // 60 FPS

    return () => clearInterval(gameLoop);
  }, [gameState, updatePlayerPosition, updatePlayerVelocity]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${player.x}px`,
        top: `${player.y}px`,
        width: `${player.width}px`,
        height: `${player.height}px`,
        transform: `scaleX(${player.direction === 'right' ? 1 : -1})`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f02eaa', 
          borderRadius: '0.5rem',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)', 
          overflow: 'hidden',
        }}
      >
        {/* Character face */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Left Eye */}
          <div
            style={{
              position: 'absolute',
              top: '25%',
              left: '25%',
              width: '16.66%',
              height: '16.66%',
              backgroundColor: 'white',
              borderRadius: '9999px',
            }}
          />
          {/* Right Eye */}
          <div
            style={{
              position: 'absolute',
              top: '25%',
              right: '25%',
              width: '16.66%',
              height: '16.66%',
              backgroundColor: 'white',
              borderRadius: '9999px',
            }}
          />
          {/* Mouth */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '33.33%',
              width: '33.33%',
              height: '16.66%',
              backgroundColor: 'white',
              borderRadius: '9999px',
            }}
          />
        </div>
      </div>
    </div>

  );
};

export default Player;