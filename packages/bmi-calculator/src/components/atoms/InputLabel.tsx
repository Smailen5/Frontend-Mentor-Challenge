const InputLabel = ({ name }: { name: string }) => {
  return (
    <label htmlFor={name} className="text-preset-7-regular block capitalize xl:text-grey-500">
      {name}
    </label>
  );
};

export default InputLabel;
