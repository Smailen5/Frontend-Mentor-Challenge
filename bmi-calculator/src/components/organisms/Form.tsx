import MeasureInput from "../molecules/MeasureInput";
import InputMisure from "../molecules/MeasurementSystemRadio";

const Form = () => {
  return (
    <div className="mx-2 mt-8 flex h-96 w-auto flex-col space-y-6 rounded-xl bg-white px-6 shadow-2xl shadow-blue-100">
      <h3 className="text-preset-4 pt-6">Enter your details below</h3>

      <div className="flex items-center justify-between">
        <InputMisure name="metric" />

        <InputMisure name="imperial" />
      </div>

      <div className="space-y-4">
        <MeasureInput name="height" unit="cm" />

        <MeasureInput name="weight" unit="kg" />
      </div>
    </div>
  );
};

export default Form;
