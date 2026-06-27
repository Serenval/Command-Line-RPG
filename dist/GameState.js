// The game state will be responsible for keeping status of the game, doing things like tracking the current level, player progress, and other game-related information.
// TODO: 
// Implement the game state management logic.
import * as readlineSync from 'readline-sync';
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
export class GameState {
    currentGameState;
    player = null;
    currentRoom = null;
    constructor() {
        this.currentGameState = GameStateEnum.NotStarted;
    }
    startGame() {
        this.currentGameState = GameStateEnum.Running;
        this.player = new Player("Hero");
        this.currentRoom = new Room(10, 5, [new Enemy("Goblin", 30, 5)], this.player);
        console.log("Game started!");
        console.log(`Player: ${this.player.getName()}`);
        console.log(`Current Room: ${this.currentRoom}`);
    }
    getPlayer() {
        return this.player;
    }
    getCurrentRoom() {
        return this.currentRoom;
    }
    gameLoop() {
        while (this.currentGameState == GameStateEnum.Running) {
            console.clear();
            this.currentRoom?.renderRoom();
            const input = readlineSync.question("Enter command (w/a/s/d to move):");
            this.getUserInput(input);
        }
    }
    getUserInput(input) {
        switch (input) {
            case "w":
                this.currentRoom?.moveUp(this.player);
                break;
            case "s":
                this.currentRoom?.moveDown(this.player);
                break;
            case "a":
                this.currentRoom?.moveLeft(this.player);
                break;
            case "d":
                this.currentRoom?.moveRight(this.player);
                break;
            default:
                break;
        }
    }
}
//# sourceMappingURL=GameState.js.map