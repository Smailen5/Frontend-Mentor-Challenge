import { MeasurementProps } from "@/types";
import InputImperial from "../molecules/InputImperial";
import InputMetric from "../molecules/InputMetric";

const Measure = ({ measureActive }: MeasurementProps) => {
  return (
    <div className="space-y-2">
      {measureActive === "metric" ? (
        <>
          <InputMetric name={"height"} />
          <InputMetric name={"weight"} />
        </>
      ) : (
        <>
          {/* imperial double input */}
          <InputImperial name={"height"} />
          <InputImperial name={"weight"} />
        </>
      )}
    </div>
  );
};

export default Measure;
