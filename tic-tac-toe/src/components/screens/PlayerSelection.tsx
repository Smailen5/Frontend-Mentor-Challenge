import { useGameStore } from "../../store/gameStore";
import { Button, Layout } from "../atoms";
import { Logo } from "../molecules";
import { CardPlayerSelection } from "../organisms";

const PlayerSelection = () => {
  const setPhase = useGameStore((state) => state.setPhase);
  return (
    <Layout className="gap-y-10">
      <Logo />

      <CardPlayerSelection />

      <div className="space-y-6">
        <Button variant={"primary"} onClick={() => alert("not implemented")}>
          new game (vs cpu)
        </Button>
        <Button
          variant={"primary"}
          styleColor={"blue"}
          onClick={() => setPhase("game")}
        >
          new game (vs player)
        </Button>
      </div>
    </Layout>
  );
};

export default PlayerSelection;
