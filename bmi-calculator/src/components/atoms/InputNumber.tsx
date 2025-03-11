const InputNumber = ({ name }: { name: string }) => {
  return (
    <input
      type="number"
      id={name}
      placeholder="0"
      className="text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16"
    />
  );
};

export default InputNumber;
