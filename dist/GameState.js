// The game state will be responsible for keeping status of the game, doing things like tracking the current level, player progress, and other game-related information.
// TODO: 
// Implement the game state management logic.
var GameStateEnum;
(function (GameStateEnum) {
    GameStateEnum[GameStateEnum["NotStarted"] = 0] = "NotStarted";
    GameStateEnum[GameStateEnum["Running"] = 1] = "Running";
    GameStateEnum[GameStateEnum["Paused"] = 2] = "Paused";
    GameStateEnum[GameStateEnum["GameOver"] = 3] = "GameOver";
})(GameStateEnum || (GameStateEnum = {}));
class GameState {
    currentGameState;
    constructor() {
        this.currentGameState = GameStateEnum.NotStarted;
    }
    startGame() {
        this.currentGameState = GameStateEnum.Running;
    }
    gameLoop() {
        if (this.currentGameState == GameStateEnum.Running) {
            // Implement the game loop logic here
        }
    }
}
export {};
//# sourceMappingURL=GameState.js.map