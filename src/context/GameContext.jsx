import { createContext, useContext, useReducer, useCallback, useState } from 'react';
import { allGems } from '../data/gems';

// Initial state
const initialState = {
  player: {
    x: 100,
    y: 100,
    width: 40,
    height: 40,
    velocity: { x: 0, y: 0 },
    isGrounded: false,
    direction: 'right',
  },
  collectedGems: [],
  terrainData: {
    terrain: [],
    platforms: [],
  },
};

// Reducer
const gameReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PLAYER_POSITION':
      return {
        ...state,
        player: {
          ...state.player,
          ...action.payload,
          direction: 
            action.payload.velocity?.x < 0 
              ? 'left' 
              : action.payload.velocity?.x > 0 
                ? 'right' 
                : state.player.direction,
        },
      };
    case 'UPDATE_PLAYER_VELOCITY':
      return {
        ...state,
        player: {
          ...state.player,
          velocity: action.payload,
          direction: 
            action.payload.x < 0 
              ? 'left' 
              : action.payload.x > 0 
                ? 'right' 
                : state.player.direction,
        },
      };
    case 'COLLECT_GEM':
      if (state.collectedGems.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        collectedGems: [...state.collectedGems, action.payload],
      };
    case 'SET_TERRAIN_DATA':
      return {
        ...state,
        terrainData: action.payload,
      };
    case 'LOAD_GAME_STATE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// Context
const GameContext = createContext(undefined);

// Provider
export const GameProvider = ({ children }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);
  const [showCollection, setShowCollection] = useState(false);
  const [selectedGem, setSelectedGem] = useState(null);

  const updatePlayerPosition = useCallback((position) => {
    dispatch({ type: 'UPDATE_PLAYER_POSITION', payload: position });
  }, []);

  const updatePlayerVelocity = useCallback((velocity) => {
    dispatch({ type: 'UPDATE_PLAYER_VELOCITY', payload: velocity });
  }, []);

  const collectGem = useCallback((gemId) => {
    dispatch({ type: 'COLLECT_GEM', payload: gemId });
  }, []);

  const setTerrainData = useCallback((terrainData) => {
    dispatch({ type: 'SET_TERRAIN_DATA', payload: terrainData });
  }, []);

  const toggleCollection = useCallback(() => {
    setShowCollection(prev => !prev);
  }, []);

  const openCollection = useCallback(() => {
    setShowCollection(true);
  }, []);

  const saveGameState = useCallback(() => {
    try {
      localStorage.setItem('portfolioQuest', JSON.stringify({
        collectedGems: gameState.collectedGems,
        playerPosition: { x: gameState.player.x, y: gameState.player.y },
      }));
    } catch (error) {
      console.error('Failed to save game state:', error);
    }
  }, [gameState]);

  const loadGameState = useCallback(() => {
    try {
      const savedState = localStorage.getItem('portfolioQuest');
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        dispatch({
          type: 'LOAD_GAME_STATE',
          payload: {
            collectedGems: parsedState.collectedGems || [],
            player: {
              ...initialState.player,
              x: parsedState.playerPosition?.x || initialState.player.x,
              y: parsedState.playerPosition?.y || initialState.player.y,
            },
          },
        });
      }
    } catch (error) {
      console.error('Failed to load game state:', error);
    }
  }, []);

  const value = {
    gameState,
    updatePlayerPosition,
    updatePlayerVelocity,
    collectGem,
    setTerrainData,
    gems: allGems,
    showCollection,
    toggleCollection,
    openCollection,
    selectedGem,
    setSelectedGem,
    saveGameState,
    loadGameState,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

// Hook
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
