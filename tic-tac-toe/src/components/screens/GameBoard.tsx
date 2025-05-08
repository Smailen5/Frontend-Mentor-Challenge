import { useGameStore } from "../../store/gameStore";

const GameBoard = () => {
  const { resetGame } = useGameStore();

  const handleResetGame = () => {
    resetGame();
  };

  return (
    <div>
      GameBoard
      <button onClick={handleResetGame}>torna indietro</button>
    </div>
  );
};

export default GameBoard;
