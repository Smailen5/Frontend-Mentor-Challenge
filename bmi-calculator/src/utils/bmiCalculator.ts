export type BMICategory =
  | "underweight"
  | "healthy"
  | "overweight"
  | "obese"
  | "severely obese";

export interface BMIResult {
  value: number;
  category: BMICategory;
  idealWeight: {
    min: number | { stones: number; pounds: number};
    max: number | { stones: number; pounds: number};
  };
}

export const getBMICategory = (bmi: number): BMICategory => {
  if (bmi < 18.5) return "underweight";
  if (bmi < 25) return "healthy";
  if (bmi < 30) return "overweight";
  if (bmi < 35) return "obese";
  return "severely obese";
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
  if (isMetric) {
    return {
      min: idealWeightKg * 0.9,
      max: idealWeightKg * 1.1,
    };
  }

  // Conversione in stones e pounds
  const kgToStones = (kg: number) => {
    const stones = Math.floor(kg/6.35029318)
    const pounds = Math.floor((kg % 6.35029318 )/ 0.45359237)
    return {
      stones, pounds
    }
  }

  const minKg = idealWeightKg * 0.9;
  const maxKg = idealWeightKg * 1.1;


  return {
    min: kgToStones(minKg),
    max: kgToStones(maxKg),
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
