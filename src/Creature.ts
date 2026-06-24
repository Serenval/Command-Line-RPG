// Base class for all creatures in the game, including players and enemies.
export class Creature {
  private name: string;
  private health: number;
  private maxHealth: number = 100; // percentage of health, 100 is full health
  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  public takeDamage(amount: number): void {
    if (this.health + amount < 0) {
      this.health = 0;
    } else {
      this.health += amount;
    }
  }
  public heal(amount: number): void {
    if (this.health + amount > this.maxHealth) {
      this.health = 100;
    } else {
      this.health += amount;
    }
  }
}