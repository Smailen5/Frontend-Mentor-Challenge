import { StatisticsGroup } from "../molecules";
import { GameBar, GameGrid } from "../organisms";

const GameBoard = () => {
  return (
    <div>
      <GameBar />
      <GameGrid />
      <div className="flex justify-between px-8">
        <StatisticsGroup />
      </div>
    </div>
  );
};

export default GameBoard;
