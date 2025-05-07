import { GameBoard, GameResult, PlayerSelection } from "./components/screens";
import { useGameStore } from "./store/gameStore";

function App() {
  const { phase, selectedPlayer, setPhase, setSelectedPlayer, resetGame } =
    useGameStore();
  return (
    <>
      <div>
        {phase === "player-selection" && <PlayerSelection />}
        {phase === "game" && <GameBoard />}
        {phase === "result" && <GameResult />}
      </div>
    </>
  );
}

export default App;
