const ResultCalculator = ({ result }: { result?: number }) => {
  return (
    <div className="h-auto w-full space-y-5 rounded-xl bg-blue-500 p-8 text-white">
      {result ? (
        <>
          <h4 className="text-preset-4 capitalize">your BMI is...</h4>
          <p className="text-preset-7-regular">
            Your BMI suggests you're a healthy weight. Your ideal weight is
            between <strong>9st 6lbs - 12st 10lbs</strong>
          </p>
        </>
      ) : (
        <>
          <h4 className="text-preset-4 capitalize">welcome!</h4>
          <p className="text-preset-7-regular">
            Enter your height and weight and you'll see your BMI result here
          </p>
        </>
      )}
    </div>
  );
};

export default ResultCalculator;
