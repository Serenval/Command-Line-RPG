import { Creature } from './Creature.js';
export class Enemy extends Creature {
    attackPower;
    constructor(name, health, attackPower) {
        super(name, health);
        this.attackPower = attackPower;
    }
    attack() {
        return this.attackPower;
    }
}
//# sourceMappingURL=Enemy.js.map