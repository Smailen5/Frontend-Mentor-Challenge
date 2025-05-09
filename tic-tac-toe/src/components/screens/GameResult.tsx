import { useGameStore } from "../../store/gameStore";
import { Modal } from "../atoms";
import { PlayAgainButtons } from "../molecules";
import WinnerMessage from "../molecules/WinnerMessage";
import GameBoard from "./GameBoard";

const GameResult = () => {
  const { winner } = useGameStore();
  return (
    <div className="relative">
      <GameBoard />
      <Modal>
        <WinnerMessage winner={winner} />

        <PlayAgainButtons />
      </Modal>
    </div>
  );
};

export default GameResult;
