import { BMIResult } from './bmiCalculator';

export const formatIdealWeight = (weight: BMIResult["idealWeight"]['min'], isMetric: boolean) => {
  if (isMetric) {
    return `${(weight as number).toFixed()} kg`;
  }
  const imperialWeight = weight as { stones: number; pounds: number };
  return `${imperialWeight.stones}st ${imperialWeight.pounds}lbs`;
};
