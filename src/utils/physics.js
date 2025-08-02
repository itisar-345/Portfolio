// Handle player movement with physics
export const handlePlayerMovement = (
  gameState,
  updatePlayerPosition) => {
  const { player, terrainData } = gameState;
  
  // Apply gravity
  let velocityY = player.velocity.y;
  velocityY += 0.8; // Gravity
  
  // Calculate new position
  let newX = player.x + player.velocity.x;
  let newY = player.y + velocityY;
  
  // Check ground collision
  let isGrounded = false;
  
  // Check terrain collision
  if (terrainData.terrain.length > 0) {
    for (let i = 0; i < terrainData.terrain.length - 1; i++) {
      const point1 = terrainData.terrain[i];
      const point2 = terrainData.terrain[i + 1];
      
      // Check if player is horizontally between these points
      if (newX + player.width > point1.x && newX < point2.x) {
        // Calculate the y value of the terrain at player's x position
        const terrainSlope = (point2.y - point1.y) / (point2.x - point1.x);
        const terrainYAtPlayerX = point1.y + terrainSlope * (newX + player.width / 2 - point1.x);
        
        // Check if player is on or below the terrain
        if (newY + player.height >= terrainYAtPlayerX) {
          newY = terrainYAtPlayerX - player.height;
          velocityY = 0;
          isGrounded = true;
        }
      }
    }
  }
  
  // Boundary checks
  if (newX < 0) newX = 0;
  
  // Update player position and state
  updatePlayerPosition({
    x: newX,
    y: newY,
    isGrounded,
    velocity: { x: player.velocity.x, y: velocityY },
  });
};

// Detect collisions with gems
export const detectCollisions = (player, gems) => {
  return gems.find(gem => 
    !gem.collected &&
    player.x < gem.x + 30 &&
    player.x + player.width > gem.x &&
    player.y < gem.y + 30 &&
    player.y + player.height > gem.y
  );
};