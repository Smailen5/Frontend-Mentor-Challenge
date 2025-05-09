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
        variant={"icon"}
        styleColor={"silver"}
        shadowSize={"small"}
        onClick={handleResetGame}
      >
        <IconRestart className="size-4" />
      </Button>
    </div>
  );
};

export default GameBar;
