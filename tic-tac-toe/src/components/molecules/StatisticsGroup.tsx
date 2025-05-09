import { useGameStats } from "../../hooks/useGameStats";
import { BoxStatistics } from "../atoms";

const StatisticsGroup = () => {
  const { getXLabel, getOLabel, getXWins, getOWins } = useGameStats();

  return (
    <>
      <BoxStatistics className="bg-light-blue">
        <span>{getXLabel()}</span>
        <span>{getXWins()}</span>
      </BoxStatistics>
      <BoxStatistics className="bg-silver">
        <span>ties</span>
        <span>32</span>
      </BoxStatistics>
      <BoxStatistics className="bg-light-yellow">
        <span>{getOLabel()}</span>
        <span>{getOWins()}</span>
      </BoxStatistics>
    </>
  );
};

export default StatisticsGroup;
