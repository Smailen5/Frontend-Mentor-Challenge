interface InputMisureProps {
  name: string;
}

const InputMisure = ({ name }: InputMisureProps) => {
  return (
    <div className="flex items-center space-x-4 flex-1">
      <div className="flex size-8 items-center justify-center rounded-full has-not-checked:border has-not-checked:border-black has-checked:bg-blue-300">
        <input
          type="radio"
          name="misure"
          id={name}
          className="size-4 appearance-none rounded-full checked:bg-blue-500"
        />
      </div>
      <label
        htmlFor={name}
        className="text-preset-5 capitalize has-checked:bg-blue-300"
      >
        {name}
      </label>
    </div>
  );
};

export default InputMisure;
