import { Checkbox } from "@/assets/images";

type SquareType = {
  active: boolean;
  setFieldValues: (arg0: string, arg1: boolean) => void;
  consent: boolean;
};

export const Square: React.FC<SquareType> = ({
  active,
  setFieldValues,
  consent,
}) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={active}
      tabIndex={0}
      onClick={() => setFieldValues("consent", !consent)}
      className={`size-5 min-w-5 ${!active && "border"} peer border-gray-300 bg-white focus:outline-none`}
    >
      {active && (
        <img srcSet={Checkbox} alt="checkbox icon" className="size-5" />
      )}
    </button>
  );
};
