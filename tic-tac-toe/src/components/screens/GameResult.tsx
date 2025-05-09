import { useGameStore } from "../../store/gameStore";
import { Button, Modal } from "../atoms";
import WinnerMessage from "../molecules/WinnerMessage";
import GameBoard from "./GameBoard";

const GameResult = () => {
  const { winner } = useGameStore();
  return (
    <div className="relative">
      <GameBoard />
      <Modal>
        <WinnerMessage winner={winner} />

        {/* Play again */}
        <div className="flex justify-center">
          <div className="space-x-4">
            <Button
              variant={"secondary"}
              styleColor={"silver"}
              shadowSize={"small"}
              className=""
            >
              quit
            </Button>
            <Button
              variant={"secondary"}
              styleColor={"yellow"}
              shadowSize={"small"}
              className=""
            >
              next round
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GameResult;
