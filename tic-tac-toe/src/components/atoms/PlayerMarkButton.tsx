interface PlayerMarkButtonProps {
  children: React.ReactNode;
  buttonPlayer: "player-x" | "player-o";
  playerSelection: "player-x" | "player-o";
  handlePlayerSelection: (playerSelection: "player-x" | "player-o") => void;
}

const PlayerMarkButton = ({
  children,
  buttonPlayer,
  playerSelection,
  handlePlayerSelection,
}: PlayerMarkButtonProps) => {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={playerSelection === buttonPlayer}
      onClick={() => handlePlayerSelection(buttonPlayer)}
      className={`flex cursor-pointer items-center justify-center rounded-xl px-12 py-1 ${playerSelection === buttonPlayer ? "bg-silver" : "bg-dark-navy"}`}
    >
      {children}
    </button>
  );
};

export default PlayerMarkButton;
