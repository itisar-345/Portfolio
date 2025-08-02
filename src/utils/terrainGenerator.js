export const generateTerrain = (width, height) => {
  // Number of points to generate for the terrain
  const numPoints = Math.floor(width / 100) + 1;
  
  // Generate terrain points
  const terrainPoints = [];
  const baseHeight = height * 0.75; // Base height for the terrain
  
  for (let i = 0; i < numPoints; i++) {
    const x = i * 100;
    // Generate a height with some variation, but ensure the first and last points are at the base height
    const heightVariation = i === 0 || i === numPoints - 1 
      ? 0 
      : Math.sin(i * 0.5) * 100 + Math.random() * 50 - 25;
    
    const y = baseHeight - heightVariation;
    terrainPoints.push({ x, y });
  }
  
  // Generate SVG path for the terrain
  let pathData = `M0,${height} `;
  
  terrainPoints.forEach(point => {
    pathData += `L${point.x},${point.y} `;
  });
  
  pathData += `L${width},${height} Z`;
  
  return {
    terrainPath: pathData,
    terrainData: terrainPoints,
  };
};