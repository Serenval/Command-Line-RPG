// The game state will be responsible for keeping status of the game, doing things like tracking the current level, player progress, and other game-related information.
// TODO: 
// Implement the game state management logic.
import { Player } from './Player.js';
import { Enemy } from './Enemy.js';
import { Room } from './Room.js';
var GameStateEnum;
(function (GameStateEnum) {
    GameStateEnum[GameStateEnum["NotStarted"] = 0] = "NotStarted";
    GameStateEnum[GameStateEnum["Running"] = 1] = "Running";
    GameStateEnum[GameStateEnum["Paused"] = 2] = "Paused";
    GameStateEnum[GameStateEnum["GameOver"] = 3] = "GameOver";
})(GameStateEnum || (GameStateEnum = {}));
class GameState {
    currentGameState;
    player = null;
    currentRoom = null;
    constructor() {
        this.currentGameState = GameStateEnum.NotStarted;
    }
    startGame() {
        this.currentGameState = GameStateEnum.Running;
        this.player = new Player("Hero");
        this.currentRoom = new Room([[0, 0], [10, 10]], [new Enemy("Goblin", 30, 5)]);
        console.log("Game started!");
        console.log(`Player: ${this.player.getName()}}`);
        console.log(`Current Room: ${this.currentRoom}`);
    }
    gameLoop() {
        if (this.currentGameState == GameStateEnum.Running) {
            // Render the room grid and player position
            // Read player input for movement or actions
            // Update the game state based on player actions and enemy behavior
        }
    }
}
//# sourceMappingURL=GameState.js.map