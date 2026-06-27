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
    moveUp(creature: Player | Enemy): void;
    moveDown(creature: Player | Enemy): void;
    moveLeft(creature: Player | Enemy): void;
    moveRight(creature: Player | Enemy): void;
    createRandomRoom(): void;
}
//# sourceMappingURL=Room.d.ts.map