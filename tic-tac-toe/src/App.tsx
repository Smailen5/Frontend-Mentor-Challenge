import PlayerSelection from "./components/screens/PlayerSelection";
import { useGameStore } from "./store/gameStore";

function App() {
  const { phase, selectedPlayer, setPhase, setSelectedPlayer, resetGame } =
    useGameStore();
  return (
    <>
      <div>
        {phase === "player-selection" && <PlayerSelection />}
        {phase === "game" && <div>fase di gioco</div>}
        {phase === "result" && <div>fase di risultato</div>}
      </div>
    </>
  );
}

export default App;
