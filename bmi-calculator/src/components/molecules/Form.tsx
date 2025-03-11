import { useState } from 'react';
import MeasureInput from "./MeasureInput";
import InputMisure from "./MeasurementSystemRadio";

const Form = () => {
  const [measureActive, setMeasureActive] = useState<string>('metric')

  console.log(measureActive)
  return (
    <>
      <div className="flex items-center justify-between">
        <InputMisure name="metric" onClick={()=>setMeasureActive('metric')} />

        <InputMisure name="imperial" onClick={()=>setMeasureActive('imperial')} />
      </div>

      <div className="space-y-4">
        <MeasureInput name="height" unit="cm" />

        <MeasureInput name="weight" unit="kg" />
      </div>
    </>
  );
};

export default Form;
