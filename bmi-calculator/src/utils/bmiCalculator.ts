export type BMICategory =
  | "sottopeso"
  | "normale"
  | "sovrappeso"
  | "obeso"
  | "obeso grave";

export interface BMIResult {
  value: number;
  category: BMICategory;
  idealWeight: {
    min: number;
    max: number;
  };
}

export const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) return "sottopeso";
  if (bmi < 25) return "normale";
  if (bmi < 30) return "sovrappeso";
  if (bmi < 35) return "obeso";
  return "obeso grave";
};

export const calculateIdealWeight = (
  height: number,
  isMetric: boolean = true,
) => {
  // Formula di Devine per il peso ideale
  // Per uomini: (50 + 2.3 * (altezza in pollici -60)) kg
  // Per donne: (45.5 + 2.3 * (altezza in pollici -60)) kg
  // Usiamo una media tra i due valori
  const heightInches = isMetric ? height / 2.54 : height;
  const idealWeightKg = 47.75 + 2.3 * (heightInches - 60);

  // Aggiungiamo un range di 10%
  return {
    min: idealWeightKg * 0.9,
    max: idealWeightKg * 1.1,
  };
};

export const calculateBMIResult = (
  height: number,
  weight: number,
  isMetric: boolean = true,
): BMIResult => {
  const bmi = isMetric
    ? weight / (height / 100) ** 2
    : (weight * 703) / (height * height);

  const category = getBMICategory(bmi);
  const idealWeight = calculateIdealWeight(height, isMetric);

  return {
    value: parseFloat(bmi.toFixed(1)),
    category,
    idealWeight,
  };
};
