export type GamePhase = "player-selection" | "game" | "result";
export type Player = "player-x" | "player-o";

export interface GameState {
  phase: GamePhase;
  selectedPlayer: Player;
  currentPlayer: Player;
  grid: (Player | null)[]; // array di 9 celle
  setPhase: (phase: GamePhase) => void;
  setSelectedPlayer: (player: Player) => void;
  makeMove: (position: number) => void;
  resetGame: () => void;
}
