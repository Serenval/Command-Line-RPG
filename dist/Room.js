// A location in the game world, it can contain items, enemies, and other interactive elements.
// TODO:
// Create a basic structure for the Room class, including the boundaries and enemies.
import { Player } from './Player.js';
import { Enemy } from './Enemy.js';
export class Room {
    width;
    height;
    enemies;
    player;
    constructor(width, height, enemies, player) {
        this.width = width;
        this.height = height;
        this.enemies = enemies;
        this.player = player;
    }
    getEnemy(index) {
        if (index >= 0 && index < this.enemies.length) {
            return this.enemies[index];
        }
        return undefined;
    }
    renderRoom() {
        const playerPosition = this.player?.getPosition();
        console.log(`Room dimensions: ${this.width} x ${this.height}`);
        for (let y = 0; y < this.height; y++) {
            let newRow = '';
            for (let x = 0; x < this.width; x++) {
                // Check if there's an enemy at this position
                const enemyAtPosition = this.enemies.find(enemy => {
                    const pos = enemy.getPosition();
                    if (pos.x === x && pos.y === y) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                if (playerPosition && playerPosition.x === x && playerPosition.y === y) {
                    newRow += 'P'; // Represent player with 'P'
                }
                else if (enemyAtPosition) {
                    newRow += 'E'; // Represent enemy with 'E'
                }
                else {
                    newRow += '.'; // Represent empty space with '.'
                }
            }
            console.log(newRow);
        }
    }
    createRandomRoom() {
        // Implement logic to create a random room with boundaries and enemies
    }
}
//# sourceMappingURL=Room.js.map