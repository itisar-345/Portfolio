import { ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import { useGame } from '../../context/GameContext';

const Controls = () => {
  const { gameState, updatePlayerVelocity } = useGame();
  const { player } = gameState;

  const handleLeftPress = () => {
    updatePlayerVelocity({ x: -5, y: player.velocity.y });
  };

  const handleRightPress = () => {
    updatePlayerVelocity({ x: 5, y: player.velocity.y });
  };

  const handleJump = () => {
    if (player.isGrounded) {
      updatePlayerVelocity({ x: player.velocity.x, y: -15 });
    }
  };

  const handleDirectionRelease = () => {
    updatePlayerVelocity({ x: 0, y: player.velocity.y });
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: '6rem',  // bottom-8 (2rem = 32px)
        right: '6rem',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,      // gap-2 (0.5rem = 8px)
      }}
    >
      {/* Jump button */}
      <button
        onTouchStart={handleJump}
        onClick={handleJump}
        aria-label="Jump"
        style={{
          width: 44,
          height: 44,
          backgroundColor: "#f02eaa",
          borderRadius: "9999px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#f8f8f2",
          boxShadow: "0 10px 15px -3px rgba(255, 0, 150, 0.5), 0 4px 6px -2px rgba(255, 0, 150, 0.5)", 
          transition: "transform 0.1s ease",
          userSelect: "none",
          touchAction: "manipulation",
        }}
        onMouseDown={e => e.currentTarget.style.transform = "scale(0.95)"}
        onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        onTouchStartCapture={e => e.currentTarget.style.transform = "scale(0.95)"}
        onTouchEndCapture={e => e.currentTarget.style.transform = "scale(1)"}
      >
        <ArrowUp size={32} />
      </button>

      {/* Left/Right controls */}
      <div
        style={{
          display: "flex",
          gap: 8,
          marginTop: 8,
        }}
      >
        <button
          onTouchStart={handleLeftPress}
          onTouchEnd={handleDirectionRelease}
          onMouseDown={e => {
            handleLeftPress();
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onMouseUp={e => {
            handleDirectionRelease();
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseLeave={e => {
            handleDirectionRelease();
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label="Move Left"
          style={{
            width: 44,
            height: 44,
            backgroundColor: "#f02eaa",
            borderRadius: "9999px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#f8f8f2",
            boxShadow: "0 10px 15px -3px rgba(255, 0, 150, 0.5), 0 4px 6px -2px rgba(255, 0, 150, 0.5)", 
            transition: "transform 0.1s ease",
            userSelect: "none",
            touchAction: "manipulation",
          }}
          onTouchStartCapture={e => e.currentTarget.style.transform = "scale(0.95)"}
          onTouchEndCapture={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <ArrowLeft size={32} />
        </button>

        <button
          onTouchStart={handleRightPress}
          onTouchEnd={handleDirectionRelease}
          onMouseDown={e => {
            handleRightPress();
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onMouseUp={e => {
            handleDirectionRelease();
            e.currentTarget.style.transform = "scale(1)";
          }}
          onMouseLeave={e => {
            handleDirectionRelease();
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label="Move Right"
          style={{
            width: 44,
            height: 44,
            backgroundColor: "#f02eaa",
            borderRadius: "9999px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#f8f8f2",
            boxShadow: "0 10px 15px -3px rgba(255, 0, 150, 0.5), 0 4px 6px -2px rgba(255, 0, 150, 0.5)", 
            transition: "transform 0.1s ease",
            userSelect: "none",
            touchAction: "manipulation",
          }}
          onTouchStartCapture={e => e.currentTarget.style.transform = "scale(0.95)"}
          onTouchEndCapture={e => e.currentTarget.style.transform = "scale(1)"}
        >
          <ArrowRight size={32} />
        </button>
      </div>
    </div>
  );

};

export default Controls;