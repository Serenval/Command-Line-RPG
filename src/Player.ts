// Players class will be responsible for managing information about the players in the game.

import { Creature } from "./Creature.js";

class Player extends Creature{
  private level: number;

  constructor(name: string, health: number = 100, level: number = 1) {
    super(name, health);
    this.level = level;
  }
}