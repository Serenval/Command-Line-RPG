// The game state will be responsible for keeping status of the game, doing things like tracking the current level, player progress, and other game-related information.
// TODO: 
// Implement the game state management logic.
import * as readlineSync from 'readline-sync';
import { Player } from './Player.js';
import { Enemy } from './Enemy.js';
import { Room } from './Room.js';

enum GameStateEnum {
  NotStarted,
  Running,
  Paused,
  GameOver
}

export class GameState {
  private currentGameState: GameStateEnum;
  private player: Player | null = null;
  private currentRoom: Room | null = null;

  constructor() {
    this.currentGameState = GameStateEnum.NotStarted;
  }
  
  public startGame(): void {
    this.currentGameState = GameStateEnum.Running;
    this.player = new Player("Hero");
    this.currentRoom = new Room(10, 5, [new Enemy("Goblin", 30, 5)], this.player);
    console.log("Game started!");
    console.log(`Player: ${this.player.getName()}`);
    console.log(`Current Room: ${this.currentRoom}`);
  }
  public getPlayer(): Player | null{
    return this.player;
  }
  public getCurrentRoom(): Room | null {
    return this.currentRoom;
  }
  public gameLoop(): void {
    while(this.currentGameState == GameStateEnum.Running) {
      console.clear();
      this.currentRoom?.renderRoom();
      const input = readlineSync.question("Enter command (w/a/s/d to move):");
      this.getUserInput(input);
    }
  }
  public getUserInput(input: string): void {
    switch(input) {
      case "w":
        this.currentRoom?.moveUp(this.player!);
        break;
      case "s":
        this.currentRoom?.moveDown(this.player!);
        break;
      case "a":
        this.currentRoom?.moveLeft(this.player!);
        break;
      case "d":
        this.currentRoom?.moveRight(this.player!);
        break;
      default:
        break;
    }
  }
}