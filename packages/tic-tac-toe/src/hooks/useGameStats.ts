import { useGameStore } from "../store/gameStore";

export const useGameStats = () => {
  const { stats, gameMode, selectedPlayer } = useGameStore();

  const getXLabel = () => {
    if (gameMode === "multiplayer") {
      return selectedPlayer === "player-x" ? "x (p1)" : "x (p2)";
    }
    return selectedPlayer === "player-x" ? "x (you)" : "x (cpu)";
  };

  const getOLabel = () => {
    if (gameMode === "multiplayer") {
      return selectedPlayer === "player-o" ? "o (p1)" : "o (p2)";
    }
    return selectedPlayer === "player-o" ? "o (you)" : "o (cpu)";
  };

  const XWins =
    gameMode === "multiplayer" ? stats.multiplayer.xWins : stats.cpu.xWins;

  const OWins =
    gameMode === "multiplayer" ? stats.multiplayer.oWins : stats.cpu.oWins;

  const ties = gameMode === "multiplayer" ? stats.multiplayer.ties : stats.cpu.ties;

  return { getXLabel, getOLabel, XWins, OWins, ties };
};
