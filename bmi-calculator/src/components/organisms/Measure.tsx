import { MeasurementProps } from "@/types";
import { useState } from "react";
// import { metricSchema } from '@/schemas/bmiSchema';
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
  const [bmiResult, setBmiResult] = useState<number | null>(null);

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
        const heightM = height / 100;
        const bmi = weight / (heightM * heightM);
        setBmiResult(parseFloat(bmi.toFixed(1)));
      }
    } else {
      const heightFt = Number(currentValues.heightFt) || 0;
      const heightIn = Number(currentValues.heightIn) || 0;
      const weightSt = Number(currentValues.weightSt) || 0;
      const weightLbs = Number(currentValues.weightLbs) || 0;

      if ((heightFt > 0 || heightIn > 0) && (weightSt > 0 || weightLbs > 0)) {
        const heightInches = heightFt * 12 + heightIn;
        const weightLbsTotal = weightSt * 14 + weightLbs;
        const bmi = (weightLbsTotal * 703) / (heightInches * heightInches);
        setBmiResult(parseFloat(bmi.toFixed(1)));
      }
    }
  };

  return (
    <div className="space-y-4">
      {measureActive === "metric" ? (
        <>
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
        </>
      ) : (
        <InputImperial values={values} onChange={handleChange} />
      )}

      <div className="pt-2">
        <ResultCalculator result={bmiResult} />
      </div>
    </div>
  );
};

export default Measure;
