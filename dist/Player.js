// Players class will be responsible for managing information about the players in the game.
import { Creature } from "./Creature.js";
class Player extends Creature {
    level;
    constructor(name, health = 100, level = 1) {
        super(name, health);
        this.level = level;
    }
}
//# sourceMappingURL=Player.js.map