import { useGameStore } from "../../store/gameStore";
import { Button } from "../atoms";

const PlayAgainButtons = () => {
  const { resetGame, nextRound } = useGameStore();

  const handleQuit = () => {
    resetGame();
  };

  const handleNextRound = ()=>{
    nextRound();
  }
  return (
    <div className="flex justify-center">
      <div className="space-x-4">
        <Button
          variant={"secondary"}
          styleColor={"silver"}
          shadowSize={"small"}
          onClick={handleQuit}
        >
          quit
        </Button>
        <Button
          variant={"secondary"}
          styleColor={"yellow"}
          shadowSize={"small"}
          onClick={handleNextRound}
        >
          next round
        </Button>
      </div>
    </div>
  );
};

export default PlayAgainButtons;
