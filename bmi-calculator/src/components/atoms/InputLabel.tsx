const InputLabel = ({ name }: { name: string }) => {
  return (
    <label htmlFor={name} className="text-preset-7-regular block capitalize">
      {name}
    </label>
  );
};

export default InputLabel;
