// A location in the game world, it can contain items, enemies, and other interactive elements.
// TODO:
// Create a basic structure for the Room class, including the boundaries and enemies.

import { Enemy } from './Enemy.js';
export class Room {
  private dimensions: number[][];
  public enemies: Enemy[];

  constructor(dimensions: number[][], enemies: Enemy[]) {
    this.dimensions = dimensions;
    this.enemies = enemies;
  }
  public getEnemy(index: number): Enemy | undefined {
    if (index >= 0 && index < this.enemies.length) {
      return this.enemies[index];
    }
    return undefined;
  }
  public createRandomRoom(): void {
    // Implement logic to create a random room with boundaries and enemies
  }
}