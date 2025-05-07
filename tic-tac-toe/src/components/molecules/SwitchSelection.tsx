// import { useState } from "react";
import { IconO, IconX } from "../../assets";
import { useGameStore } from "../../store/gameStore";
import { PlayerMarkButton } from "../atoms";

// interface SwitchSelectionProps {
//   initialSelection?: "player-x" | "player-o";
// }

const SwitchSelection = () => {
  // const [playerSelection, setPlayerSelection] = useState<
  //   "player-x" | "player-o"
  // >(initialSelection);
  const { selectedPlayer, setSelectedPlayer } = useGameStore();
  // setSelectedPlayer(initialSelection);

  const handlePlayerSelection = (selection: "player-x" | "player-o") => {
    // setPlayerSelection(selection);
    setSelectedPlayer(selection);
  };

  console.log(selectedPlayer)

  return (
    <div className="bg-dark-navy rounded-2xl p-2">
      <div
        role="radiogroup"
        aria-label="Selezione giocatore"
        className="flex justify-between gap-2"
      >
        <PlayerMarkButton
          buttonPlayer={"player-x"}
          playerSelection={selectedPlayer}
          handlePlayerSelection={handlePlayerSelection}
        >
          <IconX
            className={`m-2 size-8 ${selectedPlayer === "player-x" && "text-dark-navy"}`}
          />
        </PlayerMarkButton>

        <PlayerMarkButton
          buttonPlayer={"player-o"}
          playerSelection={selectedPlayer}
          handlePlayerSelection={handlePlayerSelection}
        >
          <IconO
            className={`m-2 size-8 ${selectedPlayer === "player-o" && "text-dark-navy"}`}
          />
        </PlayerMarkButton>
      </div>
    </div>
  );
};

export default SwitchSelection;
