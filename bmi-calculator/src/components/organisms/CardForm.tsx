import Form from "../molecules/Form";
import ResultCalculator from "../molecules/ResultCalculator";

const CardForm = () => {
  return (
    <>
      <div className="mx-2 mt-8 flex h-auto w-auto flex-col space-y-6 rounded-xl bg-white p-6 shadow-2xl shadow-blue-100">
        <h3 className="text-preset-4">Enter your details below</h3>

        <Form />

        <ResultCalculator />
      </div>
    </>
  );
};

export default CardForm;
