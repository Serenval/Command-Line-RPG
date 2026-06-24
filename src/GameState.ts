// The game state will be responsible for keeping status of the game, doing things like tracking the current level, player progress, and other game-related information.
// TODO: 
// Implement the game state management logic.

import { Player } from './Player.js';
import { Enemy } from './Enemy.js';
import { Room } from './Room.js';

enum GameStateEnum {
  NotStarted,
  Running,
  Paused,
  GameOver
}

class GameState {
  private currentGameState: GameStateEnum;
  private player: Player | null = null;
  private currentRoom: Room | null = null;

  constructor() {
    this.currentGameState = GameStateEnum.NotStarted;
  }
  
  public startGame(): void {
    this.currentGameState = GameStateEnum.Running;
    this.player = new Player("Hero");
    this.currentRoom = new Room([[0, 0], [10, 10]], [new Enemy("Goblin", 30, 5)]);
    console.log("Game started!");
    console.log(`Player: ${this.player.getName()}}`);
    console.log(`Current Room: ${this.currentRoom}`);
  }
  public gameLoop(): void {
    if(this.currentGameState == GameStateEnum.Running) {
      // Render the room grid and player position
      // Read player input for movement or actions
      // Update the game state based on player actions and enemy behavior
    }
  }
}