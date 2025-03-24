import { MeasurementProps } from "@/types";
import { useEffect, useState } from "react";
// import { metricSchema } from '@/schemas/bmiSchema';
import { BMIResult, calculateBMIResult } from "@/utils/bmiCalculator";
import InputImperial from "../molecules/InputImperial";
import InputMetric from "../molecules/InputMetric";
import ResultCalculator from "../molecules/ResultCalculator";

const Measure = ({ measureActive }: MeasurementProps) => {
  const [values, setValues] = useState({
    height: "",
    weight: "",
    heightFt: "",
    heightIn: "",
    weightSt: "",
    weightLbs: "",
  });
  const [bmiResult, setBmiResult] = useState<BMIResult | null>(null);

  // Rest dei valori quando cambia il sistema di misura
  useEffect(() => {
    setValues({
      height: "",
      weight: "",
      heightFt: "",
      heightIn: "",
      weightSt: "",
      weightLbs: "",
    });
    setBmiResult(null);
  }, [measureActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    calculateBMI({ ...values, [name]: value });
  };

  const calculateBMI = (currentValues: typeof values) => {
    if (measureActive === "metric") {
      const height = Number(currentValues.height);
      const weight = Number(currentValues.weight);
      if (height > 0 && weight > 0) {
        const result = calculateBMIResult(height, weight, true);
        setBmiResult(result);
      } else {
        setBmiResult(null);
      }
    } else {
      const heightFt = Number(currentValues.heightFt) || 0;
      const heightIn = Number(currentValues.heightIn) || 0;
      const weightSt = Number(currentValues.weightSt) || 0;
      const weightLbs = Number(currentValues.weightLbs) || 0;

      if ((heightFt > 0 || heightIn > 0) && (weightSt > 0 || weightLbs > 0)) {
        const heightInches = heightFt * 12 + heightIn;
        const weightLbsTotal = weightSt * 14 + weightLbs;
        const result = calculateBMIResult(heightInches, weightLbsTotal, false);
        setBmiResult(result);
      } else {
        setBmiResult(null);
      }
    }
  };

  return (
    <div className="space-y-4">
      {measureActive === "metric" ? (
        <div className="space-y-4 md:flex md:gap-6">
          <InputMetric
            name="height"
            value={values.height}
            onChange={handleChange}
            unit="cm"
          />
          <InputMetric
            name="weight"
            value={values.weight}
            onChange={handleChange}
            unit="kg"
          />
        </div>
      ) : (
        <InputImperial values={values} onChange={handleChange} />
      )}

      <div className="pt-2 md:pt-0">
        <ResultCalculator
          result={bmiResult}
          isMetric={measureActive === "metric"}
        />
      </div>
    </div>
  );
};

export default Measure;
