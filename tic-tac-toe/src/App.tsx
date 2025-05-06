import { useGameStore } from "./store/gameStore";

function App() {
  const { phase, selectedPlayer, setPhase, setSelectedPlayer, resetGame } =
    useGameStore();
  return (
    <>
      <div>App Home</div>
      <div>
        {phase === "player-selection" && <div>fase seleziona giocatore</div>}
        {phase === "game" && <div>fase di gioco</div>}
        {phase === "result" && <div>fase di risultato</div>}
      </div>
    </>
  );
}

export default App;
