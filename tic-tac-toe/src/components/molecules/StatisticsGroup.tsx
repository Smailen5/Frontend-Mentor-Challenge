import { BoxStatistics } from "../atoms";

const StatisticsGroup = () => {
  return (
    <>
      <BoxStatistics className="bg-light-blue">
        <span>x (you)</span>
        <span>14</span>
      </BoxStatistics>
      <BoxStatistics className="bg-silver">
        <span>ties</span>
        <span>32</span>
      </BoxStatistics>
      <BoxStatistics className="bg-light-yellow">
        <span>o (cpu)</span>
        <span>11</span>
      </BoxStatistics>
    </>
  );
};

export default StatisticsGroup;
