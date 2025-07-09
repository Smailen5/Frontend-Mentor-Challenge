import { imperialSchema, metricSchema } from "@/schemas/bmiSchema";
import { MeasurementProps } from "@/types";
import { BMIResult, calculateBMIResult } from "@/utils/bmiCalculator";
import { useEffect, useState } from "react";
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset dei valori quando cambia il sistema di misura
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
    setErrors({});
  }, [measureActive]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    validateAndCalculate({ ...values, [name]: value });
  };

  const validateAndCalculate = (currentValues: typeof values) => {
    try {
      if (measureActive === "metric") {
        const numericValues = {
          height: Number(currentValues.height),
          weight: Number(currentValues.weight),
        };

        // Validazione con Zod
        metricSchema.parse(numericValues);
        setErrors({});

        if (numericValues.height > 0 && numericValues.weight > 0) {
          const result = calculateBMIResult(
            numericValues.height,
            numericValues.weight,
            true,
          );
          setBmiResult(result);
        } else {
          setBmiResult(null);
        }
      } else {
        const numericValues = {
          heightFt: Number(currentValues.heightFt) || 0,
          heightIn: Number(currentValues.heightIn) || 0,
          weightSt: Number(currentValues.weightSt) || 0,
          weightLbs: Number(currentValues.weightLbs) || 0,
        };

        // Validazione con Zod
        imperialSchema.parse(numericValues);
        setErrors({});

        if (
          (numericValues.heightFt > 0 || numericValues.heightIn > 0) &&
          (numericValues.weightSt > 0 || numericValues.weightLbs > 0)
        ) {
          const heightInches =
            numericValues.heightFt * 12 + numericValues.heightIn;
          const weightLbsTotal =
            numericValues.weightSt * 14 + numericValues.weightLbs;
          const result = calculateBMIResult(
            heightInches,
            weightLbsTotal,
            false,
          );
          setBmiResult(result);
        } else {
          setBmiResult(null);
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        const zodError = JSON.parse(error.message);
        const newErrors: Record<string, string> = {};
        zodError.forEach((err: { path: string[]; message: string }) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
      setBmiResult(null);
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
            error={errors.height}
          />
          <InputMetric
            name="weight"
            value={values.weight}
            onChange={handleChange}
            unit="kg"
            error={errors.weight}
          />
        </div>
      ) : (
        <InputImperial
          values={values}
          onChange={handleChange}
          errors={errors}
        />
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
