import { useGameStats } from '../../hooks/useGameStats';
import { BoxStatistics, StatisticLabel } from '../atoms';

const StatisticsGroup = () => {
  const { getXLabel, getOLabel, XWins, OWins, ties } = useGameStats();

  return (
    <>
      <BoxStatistics className='bg-light-blue'>
        <StatisticLabel label={getXLabel()} value={XWins} />
      </BoxStatistics>
      <BoxStatistics className='bg-silver'>
        <StatisticLabel label={'ties'} value={ties} />
      </BoxStatistics>
      <BoxStatistics className='bg-light-yellow'>
        <StatisticLabel label={getOLabel()} value={OWins} />
      </BoxStatistics>
    </>
  );
};

export default StatisticsGroup;
