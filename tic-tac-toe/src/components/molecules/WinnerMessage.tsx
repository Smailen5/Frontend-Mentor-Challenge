import { IconO, IconX } from "../../assets";
import { WinnerMessageProps } from "../../types/molecules.types";

const WinnerMessage = ({ winner }: WinnerMessageProps) => {
  return (
    <>
      <h2 className="text-silver body-m flex items-center justify-center gap-2">
        Player {winner === "player-x" ? "1" : "2"} wins!
      </h2>

      <p
        className={`heading-m flex items-center justify-center gap-2 ${winner === "player-x" ? "text-light-blue" : "text-light-yellow"}`}
      >
        {winner === "player-x" ? <IconX /> : <IconO />}take the round
      </p>
    </>
  );
};

export default WinnerMessage;
