import { useMemo, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { generateTerrain } from '../../utils/terrainGenerator';

const Terrain = ({ width, height }) => {
  const { setTerrainData } = useGame();
  
  // Generate terrain data
  const { terrainPath, terrainData} = useMemo(() => {
    return generateTerrain(width, height);
  }, [width, height]);
  
  // Update terrain data in context
  useEffect(() => {
    setTerrainData({ terrain: terrainData });
  }, [terrainData, setTerrainData]);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0, // shorthand for top:0; bottom:0; left:0; right:0
      }}
    >

      {/* Ground */}
      <svg
        width={width}
        height={height}
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        <path
          d={terrainPath}
          fill="rgb(0, 155, 0)"  // Tailwind green-300
          strokeWidth="2"
          stroke="rgba(30, 180, 90, 0.7)" // Tailwind green-400
        />
      </svg>
    </div>
  );

};

export default Terrain;