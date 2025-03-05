import MeasureInput from "../molecules/MeasureInput";
import InputMisure from "../molecules/MeasurementSystemRadio";

const Form = () => {
  return (
    <>
      <div className="mx-2 mt-8 flex h-auto w-auto flex-col space-y-6 rounded-xl bg-white p-6 shadow-2xl shadow-blue-100">
        <h3 className="text-preset-4">Enter your details below</h3>

        <div className="flex items-center justify-between">
          <InputMisure name="metric" />

          <InputMisure name="imperial" />
        </div>

        <div className="space-y-4">
          <MeasureInput name="height" unit="cm" />

          <MeasureInput name="weight" unit="kg" />
        </div>
        <div className="h-auto w-full space-y-5 rounded-xl bg-blue-500 p-8 text-white">
          <h4 className="text-preset-4 capitalize">welcome!</h4>
          <p className="text-preset-7-regular">
            Enter your height and weight and you'll see your BMI result here
          </p>
        </div>
      </div>
    </>
  );
};

export default Form;
