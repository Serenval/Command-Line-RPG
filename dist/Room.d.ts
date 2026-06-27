import { Creature } from "./Creature.js";
import { Player } from './Player.js';
import { Enemy } from './Enemy.js';
export declare class Room {
    private width;
    private height;
    enemies: Enemy[];
    private player;
    constructor(width: number, height: number, enemies: Enemy[], player: Player);
    getEnemy(index: number): Enemy | undefined;
    renderRoom(): void;
    moveUp(creature: Creature): void;
    moveDown(creature: Creature): void;
    moveLeft(creature: Creature): void;
    moveRight(creature: Creature): void;
    createRandomRoom(): void;
}
//# sourceMappingURL=Room.d.ts.map