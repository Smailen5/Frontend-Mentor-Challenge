import { create } from "zustand";
import { GameState } from "../types/game.types";
import { checkWinner } from "../utils/checkWinner";

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

        const winner = checkWinner(newGrid);

        return {
          grid: newGrid, // aggiorna l'array grid con la nuova mossa
          currentPlayer:
            state.currentPlayer === "player-x" ? "player-o" : "player-x", // cambia il turno
          winner: winner,
          phase: winner ? "result" : state.phase,
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
