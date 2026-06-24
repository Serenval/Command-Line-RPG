// The game state will be responsible for keeping status of the game, doing things like tracking the current level, player progress, and other game-related information.
// TODO: 
// Implement the game state management logic.

enum GameStateEnum {
  NotStarted,
  Running,
  Paused,
  GameOver
}

class GameState {
  private currentGameState: GameStateEnum;

  constructor() {
    this.currentGameState = GameStateEnum.NotStarted;
  }
  
  public startGame(): void {
    this.currentGameState = GameStateEnum.Running;
  }
  public gameLoop(): void {
    if(this.currentGameState == GameStateEnum.Running) {
      // Implement the game loop logic here

    }
  }
}