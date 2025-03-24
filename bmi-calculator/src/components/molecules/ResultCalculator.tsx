import { BMIResult } from "@/utils/bmiCalculator";
import { formatIdealWeight } from "@/utils/formatIdealWeight";

const getBMIMessage = (result: BMIResult) => {
  switch (result.category) {
    case "underweight":
      return "Your BMI suggests you're underweight. Your ideal weight is between";
    case "healthy":
      return "Your BMI suggests you're a healthy weight. Your ideal weight is between";
    case "overweight":
      return "Your BMI suggests you're overweight. Your ideal weight is between";
    case "obese":
      return "Your BMI suggests you're obese. Your ideal weight is between";
    case "severely obese":
      return "Your BMI suggests you're severely obese. Your ideal weight is between";
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
      <div className="md:space-y-2">
        <h4 className="text-preset-5 md:text-preset-2">
          Your BMI is...
        </h4>
        <h5 className="text-preset-2">{result.value}</h5>
      </div>
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
