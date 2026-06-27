import { Player } from './Player.js';
import { Room } from './Room.js';
export declare class GameState {
    private currentGameState;
    private player;
    private currentRoom;
    constructor();
    startGame(): void;
    getPlayer(): Player | null;
    getCurrentRoom(): Room | null;
    gameLoop(): void;
    getUserInput(input: string): void;
}
//# sourceMappingURL=GameState.d.ts.map