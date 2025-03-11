import { useState } from "react";
import Measure from "../organisms/Measure";
// import MeasureInput from "./MeasureInput";
import InputMisure from "./MeasurementSystemRadio";

const Form = () => {
  const [measureActive, setMeasureActive] = useState<"metric" | "imperial">("metric");

  // console.log(measureActive)
  return (
    <>
      <div className="flex items-center justify-between">
        <InputMisure
          name="metric"
          handleClick={setMeasureActive}
          measureActive={measureActive}
        />

        <InputMisure
          name="imperial"
          handleClick={setMeasureActive}
          measureActive={measureActive}
        />
      </div>

      <Measure measureActive={measureActive} />
      {/* <div className="space-y-4">
        <MeasureInput name="height" measureActive={measureActive} />
        <MeasureInput name="height" measureActive={measureActive} />

        <MeasureInput name="weight" measureActive={measureActive} />
      </div> */}
    </>
  );
};

export default Form;
