import { create } from "zustand";

type GamePhase = "player-selection" | "game" | "result";
type Player = "player-x" | "player-o";

interface GameState {
  phase: GamePhase;
  selectedPlayer: Player;
  setPhase: (phase: GamePhase) => void;
  setSelectedPlayer: (player: Player) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  phase: "player-selection",
  selectedPlayer: 'player-x',
  setPhase: (phase) => set({ phase }),
  setSelectedPlayer: (player) => set({ selectedPlayer: player }),
  resetGame: () => set({ phase: "player-selection", selectedPlayer: 'player-x' }),
}));
