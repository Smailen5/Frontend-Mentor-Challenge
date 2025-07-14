export type GamePhase = 'player-selection' | 'game' | 'result';
export type Player = 'player-x' | 'player-o';
export type GameMode = 'multiplayer' | 'cpu';

export interface GameState {
  phase: GamePhase;
  gameMode: GameMode;
  stats: {
    multiplayer: {
      xWins: number;
      oWins: number;
      ties: number;
    };
    cpu: {
      xWins: number;
      oWins: number;
      ties: number;
    };
  };
  selectedPlayer: Player;
  currentPlayer: Player;
  winner: Player | 'tie' | null;
  grid: (Player | null)[]; // array di 9 celle
  setPhase: (phase: GamePhase) => void;
  setGameMode: (gameMode: GameMode) => void;
  setSelectedPlayer: (player: Player) => void;
  makeMove: (position: number) => void;
  resetGame: () => void;
  nextRound: () => void;
}
