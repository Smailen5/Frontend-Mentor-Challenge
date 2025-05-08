import { useGameStore } from "../../store/gameStore";
import GameBoard from "./GameBoard";

const GameResult = () => {
  const { winner } = useGameStore();
  return (
    <div className="relative">
      <GameBoard />
      {/* Overlay */}
      <div className="absolute inset-0 flex h-screen items-center bg-black/70">
        {/* Modal */}
        <div className="bg-semi-dark-navy w-full">
          <h2 className="flex items-center justify-center gap-2">
            Player {winner === "player-x" ? "1" : "2"} wins!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GameResult;
