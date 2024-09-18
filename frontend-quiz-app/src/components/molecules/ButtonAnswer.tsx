import { twMerge } from "tailwind-merge";
import { indexToLetters } from "../../utils/indexUtils";

type ButtonAnswerProps = {
  option: string;
  onClick: () => void;
  isSelected?: boolean;
  classButton?: string;
  classIndex?: string;
  optionIndex: number;
  children?: React.ReactNode;
};

export const ButtonAnswer: React.FC<ButtonAnswerProps> = ({
  option,
  onClick,
  classButton,
  classIndex,
  optionIndex,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `flex w-full items-center gap-4 rounded-xl bg-white p-3 font-bold focus:border-2 focus:border-violet-500`,
        `${classButton}`,
      )}
    >
      <span
        className={twMerge(
          "flex size-10 min-w-10 items-center justify-center rounded-md bg-slate-200 font-semibold",
          `${classIndex}`,
        )}
      >
        {indexToLetters(optionIndex)}
      </span>
      <div className="flex w-full items-center justify-between">
        <p className="text-sm tracking-widest">{option}</p>
        {children}
      </div>
    </button>
  );
};
