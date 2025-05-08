import { Player } from "../types/game.types";

export const checkWinner = (grid: (Player | null)[]) => {
  const winningCombinations = [
    [0, 1, 2], // prima riga
    [3, 4, 5], // seconda riga
    [6, 7, 8], // terza riga
    [0, 3, 6], // prima colonna
    [1, 4, 7], // seconda colonna
    [2, 5, 8], // terza colonna
    [0, 4, 8], // prima diagonale
    [2, 4, 6], // seconda diagonale
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
      return grid[a]; // ritorna il simbolo del vincitore
    }
  }
  return null;
};
