import MeasureInput from "../molecules/MeasureInput";

const Measure = ({
  measureActive,
}: {
  measureActive: "metric" | "imperial";
}) => {
  return (
    <div className="space-y-4">
      {measureActive === "metric" ? (
        <>
          <MeasureInput name="height" measureActive={measureActive} />
          <MeasureInput name="weight" measureActive={measureActive} />
        </>
      ) : (
        <>
          <div className="flex gap-4">
            <MeasureInput name="height" measureActive={measureActive} />
          </div>
          <div className="flex gap-4">
            <MeasureInput name="weight" measureActive={measureActive} />
          </div>
        </>
      )}
    </div>
  );
};

export default Measure;
