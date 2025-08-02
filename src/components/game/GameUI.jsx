import { Gem } from 'lucide-react';
import { useGame } from '../../context/GameContext';

const GameUI = () => {
  const { gameState, toggleCollection } = useGame();
  
  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",      // top-4 = 16px
        left: "1rem",     // left-4 = 16px
        right: "1rem",    // right-4 = 16px
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Gem collection button */}
      <button
        onClick={() => toggleCollection()}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: '#f8f8f2',             
          backgroundColor: "#1e1e1e",  
          backdropFilter: "blur(8px)",   // backdrop-blur-sm approx
          padding: "0.5rem 1rem",        // px-4 py-2
          borderRadius: "9999px",        // rounded-full
          boxShadow: "0 4px 6px rgba(255, 0, 150, 0.5)", // shadow-md approx
          transition: "background-color 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(100, 0, 150, 0.8)'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1e1e1e'}
      >
        <Gem style={{ color: "#f02eaa" }} size={20} /> {/* text-blue-500 */}
        <span style={{ fontWeight: 500 }}>Gem Collection</span>
        <span
          style={{
            backgroundColor: "#f02eaa",
            color: "white",
            borderRadius: "9999px",
            padding: "0.125rem 0.5rem",
            fontSize: "0.75rem",
            marginLeft: "0.25rem",
            display: "inline-block",
          }}
        >
          {gameState.collectedGems.length}
        </span>
      </button>
    </div>
  );

};

export default GameUI;