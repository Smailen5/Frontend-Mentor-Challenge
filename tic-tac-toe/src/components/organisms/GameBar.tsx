import { IconRestart } from "../../assets";
import { useGameStore } from "../../store/gameStore";
import { Button } from "../atoms";
import { CardPlayerTurn, Logo } from "../molecules";

const GameBar = () => {
  const { resetGame } = useGameStore();

  const handleResetGame = () => {
    resetGame();
  };

  return (
    <div className="flex items-center justify-between p-6">
      <Logo />

      <CardPlayerTurn />

      <Button
        variant={"secondary"}
        styleColor={"silver"}
        onClick={handleResetGame}
        className="size-10 rounded-md"
      >
        <IconRestart className="size-4" />
      </Button>
    </div>
  );
};

export default GameBar;
