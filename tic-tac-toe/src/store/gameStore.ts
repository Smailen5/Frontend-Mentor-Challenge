import { create } from "zustand";
import { GamePhase, Player } from "../types/game.types";

interface GameState {
  phase: GamePhase;
  selectedPlayer: Player;
  currentPlayer: Player;
  grid: (Player | null)[]; // array di 9 celle
  setPhase: (phase: GamePhase) => void;
  setSelectedPlayer: (player: Player) => void;
  makeMove: (position: number) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  phase: "player-selection",
  selectedPlayer: "player-x",
  currentPlayer: "player-x",
  grid: Array(9).fill(null),
  setPhase: (phase) => set({ phase }),
  setSelectedPlayer: (player) => set({ selectedPlayer: player }),
  makeMove: (position) =>
    set((state) => {
      // se la cella e vuota fai la mossa
      if (state.grid[position] === null) {
        const newGrid = [...state.grid]; // crea una nuova copia dell'array grid
        newGrid[position] = state.currentPlayer; // assegna il simbolo al posto selezionato

        return {
          grid: newGrid, // aggiorna l'array grid con la nuova mossa
          currentPlayer:
            state.currentPlayer === "player-x" ? "player-o" : "player-x", // cambia il turno
        };
      }
      return state;
    }),
  resetGame: () =>
    set({
      phase: "player-selection",
      selectedPlayer: "player-x",
      currentPlayer: "player-x",
      grid: Array(9).fill(null),
    }),
}));
