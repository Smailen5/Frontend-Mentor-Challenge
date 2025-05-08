import { IconO, IconX } from "../../assets";
import { useGameStore } from "../../store/gameStore";
import { Card } from "../atoms";

const CardPlayerTurn = () => {
  const { currentPlayer } = useGameStore();
  return (
    <Card className="flex items-center justify-center gap-2 rounded-md p-2 px-4 shadow-[0_4px_0_0_rgba(0,0,0,0.25)]">
      {currentPlayer === "player-x" ? <IconX /> : <IconO />} turn
    </Card>
  );
};

export default CardPlayerTurn;
