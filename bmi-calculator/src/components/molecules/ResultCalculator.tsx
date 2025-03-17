const ResultCalculator = ({ result }: { result?: number | null }) => {
  return (
    <div className="h-auto w-full space-y-5 rounded-xl bg-blue-500 p-8 text-white">
      <h4
        className={`capitalize ${result ? "text-preset-5" : "text-preset-4"}`}
      >
        {result ? "your BMI is..." : "welcome!"}
      </h4>
      {result && <h5 className="text-preset-2">{result}</h5>}
      <p className="text-preset-7-regular">
        {result
          ? "Your BMI suggests you're a healthy weight. Your ideal weight is between <strong>9st 6lbs - 12st 10lbs</strong>"
          : "Enter your height and weight and you'll see your BMI result here"}
      </p>
    </div>
  );
};

export default ResultCalculator;
