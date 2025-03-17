import { BMIResult } from "@/utils/bmiCalculator";
import { formatIdealWeight } from "@/utils/formatIdealWeight";

const getBMIMessage = (result: BMIResult) => {
  switch (result.category) {
    case "sottopeso":
      return "Il tuo BMI suggerisce che sei sottopeso. il tuo peso ideale è tra";
    case "normale":
      return "Il tuo BMI suggerisce che sei normale. il tuo peso ideale è tra";
    case "sovrappeso":
      return "Il tuo BMI suggerisce che sei sovrappeso. il tuo peso ideale è tra";
    case "obeso":
      return "Il tuo BMI suggerisce che sei obeso. il tuo peso ideale è tra";
  }
};

const ResultCalculator = ({
  result,
  isMetric = true,
}: {
  result?: BMIResult | null;
  isMetric?: boolean;
}) => {
  if (!result) {
    return (
      <div className="h-auto w-full space-y-5 rounded-xl bg-blue-500 p-8 text-white">
        <h4 className="text-preset-4 capitalize">Welcome!</h4>
        <p className="text-preset-7-regular">
          Enter your height and weight and you'll see your BMI result here
        </p>
      </div>
    );
  }

  return (
    <div className="h-auto w-full space-y-5 rounded-xl bg-blue-500 p-8 text-white">
      <h4 className="text-preset-5">Your BMI is...</h4>
      <h5 className="text-preset-2">{result.value}</h5>
      <p className="text-preset-7-regular">
        {getBMIMessage(result)}{" "}
        <strong>
          {formatIdealWeight(result.idealWeight.min, isMetric)} -{" "}
          {formatIdealWeight(result.idealWeight.max, isMetric)}
        </strong>
      </p>
    </div>
  );
};

export default ResultCalculator;
