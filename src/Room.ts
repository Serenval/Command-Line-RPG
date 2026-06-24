// A location in the game world, it can contain items, enemies, and other interactive elements.
// TODO:
// Create a basic structure for the Room class, including the boundaries and enemies.

import { Enemy } from './Enemy.js';
class Room {
  private dimensions: number[][];
  private enemies: Enemy[];

  constructor(dimensions: number[][], enemies: Enemy[]) {
    this.dimensions = dimensions;
    this.enemies = enemies;
  }
  public createRandomRoom(): void {
    // Implement logic to create a random room with boundaries and enemies
  }
}