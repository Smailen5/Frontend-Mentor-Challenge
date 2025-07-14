import { StatisticLabelProps } from '../../types/atoms.types';

const StatisticLabel = ({ label, value }: StatisticLabelProps) => {
  return (
    <>
      <span className='font-medium'>{label}</span>
      <span>{value}</span>
    </>
  );
};

export default StatisticLabel;
