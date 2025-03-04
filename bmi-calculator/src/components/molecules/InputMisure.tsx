interface InputMisureProps {
  name: string;
}

const InputMisure = ({ name }: InputMisureProps) => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="radio"
        name="misure"
        id={name}
        className="size-8 appearance-none rounded-full bg-blue-300"
      />
      <label htmlFor={name} className="text-white">
        {name}
      </label>
    </div>
  );
};

export default InputMisure;
