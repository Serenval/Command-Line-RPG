import { Creature } from './Creature.js';

export class Enemy extends Creature {
  private attackPower: number;

  constructor(name: string, health: number, attackPower: number) {
    super(name, health);
    this.attackPower = attackPower;
  }

  attack(): number {
    return this.attackPower;
  }
}