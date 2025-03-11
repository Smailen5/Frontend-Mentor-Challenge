import { MeasureRadioProps } from "@/types";

const MeasurementSystemRadio = ({
  name,
  handleClick,
  measureActive,
}: MeasureRadioProps) => {
  const handleActive = (name: string) => {
    if (handleClick) {
      handleClick(name);
    }
  };

  return (
    <div className="flex flex-1 items-center space-x-4">
      <div className="flex size-8 items-center justify-center rounded-full has-not-checked:border has-not-checked:border-black has-checked:bg-blue-300">
        <input
          type="radio"
          name="misure"
          id={name}
          checked={measureActive === name}
          onChange={() => handleActive(name)}
          className="size-4 appearance-none rounded-full checked:bg-blue-500"
        />
      </div>
      <label
        htmlFor={name}
        className="text-preset-5 cursor-pointer capitalize has-checked:bg-blue-300"
      >
        {name}
      </label>
    </div>
  );
};

export default MeasurementSystemRadio;
