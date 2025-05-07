import { Button, Layout } from "../atoms";
import { Logo } from "../molecules";
import { CardPlayerSelection } from "../organisms";

const PlayerSelection = () => {
  return (
    <Layout>
      <div>
        <Logo />
      </div>
      <div>
        <CardPlayerSelection />
      </div>
      <div className="space-y-6">
        <Button variant={"primary"}>new game (vs cpu)</Button>
        <Button variant={"primary"} styleColor={"blue"}>
          new game (vs player)
        </Button>
      </div>
    </Layout>
  );
};

export default PlayerSelection;
