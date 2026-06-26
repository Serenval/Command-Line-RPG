// Base class for all creatures in the game, including players and enemies.
export class Creature {
    name;
    health;
    maxHealth = 100; // percentage of health, 100 is full health
    position = { x: 0, y: 0 }; // Default position at (0, 0)
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.maxHealth = health; // Set maxHealth to the initial health value
    }
    takeDamage(amount) {
        if (this.health - amount < 0) {
            this.health = 0;
        }
        else {
            this.health -= amount;
        }
    }
    heal(amount) {
        if (this.health + amount > this.maxHealth) {
            this.health = this.maxHealth;
        }
        else {
            this.health += amount;
        }
    }
    changePosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
    getPosition() {
        return this.position;
    }
    getName() {
        return this.name;
    }
}
//# sourceMappingURL=Creature.js.map