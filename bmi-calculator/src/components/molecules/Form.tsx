import { useState } from 'react';
import MeasureInput from "./MeasureInput";
import InputMisure from "./MeasurementSystemRadio";

const Form = () => {
  const [measureActive, setMeasureActive] = useState<string>('metric')

  // console.log(measureActive)
  return (
    <>
      <div className="flex items-center justify-between">
        <InputMisure name="metric" handleClick={setMeasureActive} measureActive={measureActive} />

        <InputMisure name="imperial" handleClick={setMeasureActive} measureActive={measureActive} />
      </div>

      <div className="space-y-4">
        <MeasureInput name="height" unit="cm" />

        <MeasureInput name="weight" unit="kg" />
      </div>
    </>
  );
};

export default Form;
