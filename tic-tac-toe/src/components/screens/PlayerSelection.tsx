import { Layout } from "../atoms";
import { Logo } from "../molecules";

const PlayerSelection = () => {
  return (
    <Layout>
      <div>
        <Logo />
      </div>
      <div>scheda seleziona simbolo giocatore</div>
      <div>bottoni nuovo giocatore e multiplayer</div>
    </Layout>
  );
};

export default PlayerSelection;
