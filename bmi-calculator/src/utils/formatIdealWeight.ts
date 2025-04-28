import { BMIResult } from './bmiCalculator';

export const formatIdealWeight = (weight: BMIResult["idealWeight"]['min'], isMetric: boolean) => {
  if (isMetric) {
    const numericWeight = Number(weight);
    if(isNaN(numericWeight)) return "0 kg"
    return `${numericWeight.toFixed()} kg`;
  }
  const imperialWeight = weight as { stones: number; pounds: number };
  if(!imperialWeight || typeof imperialWeight.stones !== "number" || typeof imperialWeight.pounds !== "number") {
    return "0st 0lbs"
  }
  return `${imperialWeight.stones}st ${imperialWeight.pounds}lbs`;
};
