import { useEffect, useRef, useState } from 'react';
import { useGame } from '../../context/GameContext';
import Player from './Player';
import Terrain from './Terrain';
import GameUI from './GameUI';
import GemCollection from './GemCollection';
import CompletionScreen from './CompletionScreen';
import { GemModal } from './GemModal';
import { detectCollisions } from '../../utils/physics';

const Game = ({ onCloseGame }) => {
  const gameRef = useRef(null);
  const { 
    gameState, 
    gems, 
    collectGem, 
    showCollection,
    openCollection,
    selectedGem,
    setSelectedGem,
    saveGameState,
    loadGameState
  } = useGame();
  
  const [showGemModal, setShowGemModal] = useState(false);
  const [lastCollectedGem, setLastCollectedGem] = useState(null);
  const [gameWidth, setGameWidth] = useState(0);
  const [gameHeight, setGameHeight] = useState(0);
  const [showCompletionScreen, setShowCompletionScreen] = useState(false);
  const [pendingOpenCollection, setPendingOpenCollection] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (gameRef.current) {
        setGameWidth(gameRef.current.clientWidth);
        setGameHeight(gameRef.current.clientHeight);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load game state on mount
  useEffect(() => {
    loadGameState();
  }, [loadGameState]);

  // Save game state on changes
  useEffect(() => {
    saveGameState();
  }, [gameState, saveGameState]);

   // Check for game completion
  useEffect(() => {
    if (gameState.collectedGems.length === gems.length && gems.length > 0 && !showCompletionScreen) {
      setShowCompletionScreen(true);
    }
  }, [gameState.collectedGems.length, gems.length, showCompletionScreen]);

  // Check for collisions
  useEffect(() => {
    const checkCollisions = () => {
      const collidedGem = detectCollisions(gameState.player, gems);
      
      if (collidedGem) {
        collectGem(collidedGem.id);
        setLastCollectedGem(collidedGem);
        setShowGemModal(true);
        
        // Auto-hide the modal after 3 seconds
        setTimeout(() => {
          setShowGemModal(false);
        }, 3000);
      }
    };
    
    checkCollisions();
  }, [gameState.player, gems, collectGem]);

  // Effect to open collection AFTER screen is hidden
  useEffect(() => {
    if (!showCompletionScreen && pendingOpenCollection) {
      openCollection(); // from GameContext
      setPendingOpenCollection(false);
    }
  }, [showCompletionScreen, pendingOpenCollection, openCollection]);
  

  return (
    <div 
      ref={gameRef}
      style={{ 
        position: "relative",
        width: "100%", 
        height: "100%", 
        overflow: "hidden",
        background: "rgb(0, 30, 100)", 
        border: "1px solid rgb(1, 30, 100)", 
        borderRadius: "0.5rem" 
      }}
    >
      {/* Game world */}
      <div 
        style={{ 
          position: "absolute",
          width: "100%", 
          height: "100%", 
          transform: `translateX(${-gameState.player.x + gameWidth / 16}px)`, 
          transition: "transform 0.1s ease-out" 
        }}
      >
        <Terrain width={gameWidth * 5} height={gameHeight} />
        
        {gems.map((gem) => (
          !gameState.collectedGems.includes(gem.id) && (
            <div 
              key={gem.id}
              style={{ 
                position: "absolute",
                left: `${gem.x}px`, 
                top: `${gem.y}px`,
                width: "30px",
                height: "30px"
              }}
            >
              <div 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  borderRadius: "0.5rem", // rounded-lg ≈ 8px
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // shadow-md approximation
                  backgroundColor: 
                    gem.type === 'skill' ? 'rgb(255, 0, 100)' :
                    gem.type === 'project' ? 'rgb(255, 0, 255)' :
                    'rgb(150, 0, 255)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  animation: "bounceSlow 3s infinite", // custom animation name
                }}
              />
            </div>
          )
        ))}
        
        <Player />
      </div>
      
      {/* UI Elements */}
      <GameUI />
            
      {/* Gem Collection Panel */}
      {showCollection && (
        <GemCollection onSelectGem={setSelectedGem} />
      )}
      
      {/* Gem Modal */}
      {showGemModal && lastCollectedGem && (
        <GemModal 
          gem={lastCollectedGem}
          onClose={() => setShowGemModal(false)}
        />
      )}
      
      {selectedGem && (
        <GemModal 
          gem={selectedGem}
          onClose={() => setSelectedGem(null)}
        />
      )}

      {/* Completion Screen */}
      {showCompletionScreen && !showCollection && (
        <CompletionScreen 
          gems={gems}
          onViewCollection={() => {
            setShowCompletionScreen(false); // Hide completion screen
            setPendingOpenCollection(true); // Flag to open collection
          }}
          onCloseGame={onCloseGame}
        />
      )}
    </div>
  );
};

export default Game;
