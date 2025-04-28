import { useState } from "react";
import Measure from "../organisms/Measure";
import InputMisure from "./MeasurementSystemRadio";

const Form = () => {
  const [measureActive, setMeasureActive] = useState<"metric" | "imperial">("metric");

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
    </>
  );
};

export default Form;
