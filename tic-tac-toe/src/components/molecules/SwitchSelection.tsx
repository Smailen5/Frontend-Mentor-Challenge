import { useState } from "react";
import { IconO, IconX } from "../../assets";
import { PlayerMarkButton } from "../atoms";

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
        <PlayerMarkButton
          buttonPlayer={"player-x"}
          playerSelection={playerSelection}
          handlePlayerSelection={handlePlayerSelection}
        >
          <IconX
            className={`m-2 size-8 ${playerSelection === "player-x" && "text-dark-navy"}`}
          />
        </PlayerMarkButton>

        <PlayerMarkButton
          buttonPlayer={"player-o"}
          playerSelection={playerSelection}
          handlePlayerSelection={handlePlayerSelection}
        >
          <IconO
            className={`m-2 size-8 ${playerSelection === "player-o" && "text-dark-navy"}`}
          />
        </PlayerMarkButton>
      </div>
    </div>
  );
};

export default SwitchSelection;
