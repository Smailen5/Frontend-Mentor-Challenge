import { useGameStore } from "../../store/gameStore";
import { GameButton } from "../atoms";

const GameGrid = () => {
  const { grid } = useGameStore();
  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-10 p-6">
      {grid.map((cell, index) => (
        <GameButton key={index} position={index} value={cell} />
      ))}
    </div>
  );
};

export default GameGrid;
