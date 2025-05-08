import { IconO, IconX } from "../../assets";
import { useGameStore } from "../../store/gameStore";
import { GameButtonProps } from "../../types/atoms.types";

const GameButton = ({ position, value }: GameButtonProps) => {
  const { makeMove } = useGameStore();

  const handleClick = () => {
    makeMove(position);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-semi-dark-navy flex size-20 cursor-pointer items-center justify-center rounded-lg shadow-[0_8px_0_0_rgba(0,0,0,0.25)]"
    >
      {value &&
        (value === "player-x" ? (
          <IconX className="text-light-blue size-8" />
        ) : (
          <IconO className="text-light-yellow size-8" />
        ))}
    </button>
  );
};

export default GameButton;
