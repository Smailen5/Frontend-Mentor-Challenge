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

  console.log(playerSelection);

  return (
    <div className="bg-dark-navy rounded-2xl p-4">
      <div
        role="radiogroup"
        aria-label="Selezione giocatore"
        className="flex justify-between"
      >
        <button
          type="button"
          role="radio"
          aria-checked={playerSelection === "player-x"}
          onClick={() => handlePlayerSelection("player-x")}
        >
          <IconX />
        </button>

        <button
          type="button"
          role="radio"
          aria-checked={playerSelection === "player-o"}
          onClick={() => handlePlayerSelection("player-o")}
        >
          <IconO />
        </button>
      </div>
    </div>
  );
};

export default SwitchSelection;
