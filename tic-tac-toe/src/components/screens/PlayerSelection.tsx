import { useGameStore } from "../../store/gameStore";
import { GameMode } from "../../types/game.types";
import { Button, Layout } from "../atoms";
import { Logo } from "../molecules";
import { CardPlayerSelection } from "../organisms";

const PlayerSelection = () => {
  const { setPhase, setGameMode } = useGameStore();

  const handleGameMode = (mode: GameMode) => {
    setGameMode(mode);
    setPhase("game");
  };

  return (
    <Layout className="gap-y-10">
      <Logo />

      <CardPlayerSelection />

      <div className="space-y-6">
        <Button variant={"primary"} onClick={() => handleGameMode("cpu")}>
          new game (vs cpu)
        </Button>
        <Button
          variant={"primary"}
          styleColor={"blue"}
          onClick={() => handleGameMode("multiplayer")}
        >
          new game (vs player)
        </Button>
      </div>
    </Layout>
  );
};

export default PlayerSelection;
