import { useState } from "react";
import { IconO, IconX } from "../../assets";

interface SwitchSelectionProps {
  initialSelection?: "player-x" | "player-o";
}

const SwitchSelection = ({
  initialSelection = "player-x",
}: SwitchSelectionProps) => {
  const [playerSelection, setPlayerSelection] = useState<
    "player-x" | "player-o"
  >(initialSelection);

  const handlePlayerSelection = (selection: "player-x" | "player-o") => {
    setPlayerSelection(selection);
  };

  return (
    <div className="bg-dark-navy rounded-2xl p-2">
      <div
        role="radiogroup"
        aria-label="Selezione giocatore"
        className="flex justify-between gap-2"
      >
        <button
          type="button"
          role="radio"
          aria-checked={playerSelection === "player-x"}
          onClick={() => handlePlayerSelection("player-x")}
          className={`flex cursor-pointer items-center justify-center rounded-xl px-12 py-1 ${playerSelection === "player-x" ? "bg-silver" : "bg-dark-navy"}`}
        >
          <IconX
            className={`m-2 size-8 ${playerSelection === "player-x" && "text-dark-navy"}`}
          />
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={playerSelection === "player-o"}
          onClick={() => handlePlayerSelection("player-o")}
          className={`flex cursor-pointer items-center justify-center rounded-xl px-12 py-1 ${playerSelection === "player-o" ? "bg-silver" : "bg-dark-navy"}`}
        >
          <IconO
            className={`m-2 size-8 ${playerSelection === "player-o" && "text-dark-navy"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default SwitchSelection;
