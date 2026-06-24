// A location in the game world, it can contain items, enemies, and other interactive elements.
// TODO:
// Create a basic structure for the Room class, including the boundaries and enemies.
import { Enemy } from './Enemy.js';
class Room {
    dimensions;
    enemies;
    constructor(dimensions, enemies) {
        this.dimensions = dimensions;
        this.enemies = enemies;
    }
    createRandomRoom() {
        // Implement logic to create a random room with boundaries and enemies
    }
}
//# sourceMappingURL=Room.js.map