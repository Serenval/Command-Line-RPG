// Base class for all creatures in the game, including players and enemies.
export class Creature {
  private name: string;
  private health: number;
  private maxHealth: number = 100; // percentage of health, 100 is full health
  private position: { x: number; y: number } = { x: 0, y: 0 }; // Default position at (0, 0)
  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    this.maxHealth = health; // Set maxHealth to the initial health value
  }

  public takeDamage(amount: number): void {
    if (this.health - amount < 0) {
      this.health = 0;
    } else {
      this.health -= amount;
    }
  }
  public heal(amount: number): void {
    if (this.health + amount > this.maxHealth) {
      this.health = this.maxHealth;
    } else {
      this.health += amount;
    }
  }
  public changePosition(x: number, y: number): void {
    this.position.x = x;
    this.position.y = y;
  }
  getName() {
    return this.name;
  }
}