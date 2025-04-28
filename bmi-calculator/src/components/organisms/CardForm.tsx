import Form from "../molecules/Form";

const CardForm = () => {
  return (
    <div className="mx-2 mt-8 flex h-auto w-auto flex-col rounded-xl bg-white p-6 shadow-2xl shadow-blue-100 md:mx-6 md:mt-10 md:gap-8 md:p-8 xl:m-0 xl:w-[calc(50%-16px)]">
      <h3 className="text-preset-4 text-blue-900">Enter your details below</h3>

      <Form />
    </div>
  );
};

export default CardForm;
