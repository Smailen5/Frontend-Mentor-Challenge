import MeasureInput from "./MeasureInput";
import InputMisure from "./MeasurementSystemRadio";

const Form = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <InputMisure name="metric" />

        <InputMisure name="imperial" />
      </div>

      <div className="space-y-4">
        <MeasureInput name="height" unit="cm" />

        <MeasureInput name="weight" unit="kg" />
      </div>
    </>
  );
};

export default Form;
