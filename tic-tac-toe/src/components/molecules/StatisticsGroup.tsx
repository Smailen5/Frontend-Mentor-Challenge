import { useGameStats } from "../../hooks/useGameStats";
import { BoxStatistics } from "../atoms";

const StatisticsGroup = () => {
  const { getXLabel, getOLabel, XWins, OWins } = useGameStats();

  return (
    <>
      <BoxStatistics className="bg-light-blue">
        <span>{getXLabel()}</span>
        <span>{XWins}</span>
      </BoxStatistics>
      <BoxStatistics className="bg-silver">
        <span>ties</span>
        <span>32</span>
      </BoxStatistics>
      <BoxStatistics className="bg-light-yellow">
        <span>{getOLabel()}</span>
        <span>{OWins}</span>
      </BoxStatistics>
    </>
  );
};

export default StatisticsGroup;
