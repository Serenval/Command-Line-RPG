// A location in the game world, it can contain items, enemies, and other interactive elements.
// TODO:
// Create a basic structure for the Room class, including the boundaries and enemies.
import { Creature } from "./Creature.js";
import { Player } from './Player.js';
import { Enemy } from './Enemy.js';
export class Room {
  private width: number;
  private height: number;
  public enemies: Enemy[];
  private player: Player;

  constructor(width: number, height: number, enemies: Enemy[], player: Player) {
    this.width = width;
    this.height = height;
    this.enemies = enemies;
    this.player = player;
  }
  public getEnemy(index: number): Enemy | undefined {
    if (index >= 0 && index < this.enemies.length) {
      return this.enemies[index];
    }
    return undefined;
  }
  public renderRoom(): void { 
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
          } else {
            return false;
          }
        });
        
        if (playerPosition && playerPosition.x === x && playerPosition.y === y) {
          newRow += 'P'; // Represent player with 'P'
        }
        else if (enemyAtPosition) {
          newRow += 'E'; // Represent enemy with 'E'
        } else {
          newRow += '.'; // Represent empty space with '.'
        }
      }
      console.log(newRow);
    }
  }
  public moveUp(creature: Creature): void {
    const currentPos = creature.getPosition();
    if (currentPos.y > 0) {
      creature.changePosition(currentPos.x, currentPos.y - 1);
    }
  }
  public moveDown(creature: Creature): void {
    const currentPos = creature.getPosition();
    if (currentPos.y < this.height - 1) {
      creature.changePosition(currentPos.x, currentPos.y + 1);
    }
  }
  public moveLeft(creature: Creature): void {
    const currentPos = creature.getPosition();
    if (currentPos.x > 0) {
      creature.changePosition(currentPos.x - 1, currentPos.y);
    }
  }
  public moveRight(creature: Creature): void {
    const currentPos = creature.getPosition();
    if (currentPos.x < this.width - 1) {
      creature.changePosition(currentPos.x + 1, currentPos.y);
    }
  }
  public createRandomRoom(): void {
    // Implement logic to create a random room with boundaries and enemies
  }
}