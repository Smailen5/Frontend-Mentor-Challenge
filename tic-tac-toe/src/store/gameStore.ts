import { create } from "zustand";
import { GameState } from "../types/game.types";
import { checkWinner } from "../utils/checkWinner";

export const useGameStore = create<GameState>((set) => ({
  phase: "player-selection",
  gameMode: "multiplayer",
  stats: {
    multiplayer: {
      xWins: 0,
      oWins: 0,
    },
    cpu: {
      xWins: 0,
      oWins: 0,
    },
  },
  selectedPlayer: "player-x",
  currentPlayer: "player-x",
  winner: null,
  grid: Array(9).fill(null),
  setPhase: (phase) => set({ phase }),
  setSelectedPlayer: (player) => set({ selectedPlayer: player }),
  setGameMode: (mode) =>
    set((state) => ({
      gameMode: mode,
      stats:
        mode === "multiplayer"
          ? { multiplayer: { xWins: 0, oWins: 0 }, cpu: state.stats.cpu }
          : {
              multiplayer: state.stats.multiplayer,
              cpu: { xWins: 0, oWins: 0 },
            },
    })),
  makeMove: (position) =>
    set((state) => {
      // se la cella e vuota fai la mossa
      if (state.grid[position] === null) {
        const newGrid = [...state.grid]; // crea una nuova copia dell'array grid
        newGrid[position] = state.currentPlayer; // assegna il simbolo al posto selezionato

        const winner = checkWinner(newGrid);

        if (winner) {
          const newStats = { ...state.stats };
          if (state.gameMode === "multiplayer") {
            if (winner === "player-x") {
              newStats.multiplayer.xWins += 1;
            } else {
              newStats.multiplayer.oWins += 1;
            }
          } else {
            if (winner === "player-x") {
              newStats.cpu.xWins += 1;
            } else {
              newStats.cpu.oWins += 1;
            }
          }
          return {
            grid: newGrid,
            currentPlayer: state.currentPlayer === 'player-x' ? 'player-o' :"player-x",
            stats: newStats,
            winner: winner,
            phase: "result",
          };
        }

        return {
          grid: newGrid, // aggiorna l'array grid con la nuova mossa
          currentPlayer:
            state.currentPlayer === "player-x" ? "player-o" : "player-x", // cambia il turno
          winner: winner,
          phase: state.phase,
        };
      }
      return state;
    }),
  resetGame: () =>
    set((state) => ({
      phase: "player-selection",
      selectedPlayer: "player-x",
      currentPlayer: "player-x",
      grid: Array(9).fill(null),
      stats:
        state.gameMode === "multiplayer"
          ? { multiplayer: { xWins: 0, oWins: 0 }, cpu: state.stats.cpu }
          : {
              multiplayer: state.stats.multiplayer,
              cpu: { xWins: 0, oWins: 0 },
            },
    })),
  nextRound: () =>
    set((state) => ({
      phase: "game",
      grid: Array(9).fill(null),
      currentPlayer: state.selectedPlayer,
      winner: null,
    })),
}));
