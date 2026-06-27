import { Player } from './Player.js';
import { Enemy } from './Enemy.js';
import { Room } from './Room.js';
export declare class GameState {
    private currentGameState;
    private player;
    private currentRoom;
    currentEnemy: Enemy | null;
    constructor();
    startGame(): void;
    getPlayer(): Player | null;
    getCurrentRoom(): Room | null;
    gameLoop(): void;
    handleExploration(): void;
    handleCombat(): void;
    getUserInput(input: string): void;
    checkCollision(): Enemy | null;
}
//# sourceMappingURL=GameState.d.ts.map