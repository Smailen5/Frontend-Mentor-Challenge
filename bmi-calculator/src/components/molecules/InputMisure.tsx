interface InputMisureProps {
  name: string;
}

const InputMisure = ({ name }: InputMisureProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className='rounded-full has-checked:bg-blue-300 flex items-center justify-center size-8 has-not-checked:border has-not-checked:border-white'>
        <input
          type="radio"
          name="misure"
          id={name}
          className="size-4 appearance-none rounded-full checked:bg-blue-500"
        />
      </div>
      <label htmlFor={name} className="text-white has-checked:bg-blue-300">
        {name}
      </label>
    </div>
  );
};

export default InputMisure;
