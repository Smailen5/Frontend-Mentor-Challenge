import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";
import { twMerge } from "tailwind-merge";

type Quiz = {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};
export const ButtonsSection = (props: { quizzes: Quiz[] }) => {
  return (
    <section className="flex flex-col gap-4">
      {props.quizzes.map((quiz) => (
        <Link to={`/${quiz.title.toLowerCase()}-quiz`}>
          <Button key={quiz.title} {...quiz} />
        </Link>
      ))}
    </section>
  );
};

type ButtonAnswerProps = {
  option: string;
  onClick: () => void;
  isSelected?: boolean;
  className?: string;
  optionIndex: number;
};

export const ButtonAnswer: React.FC<ButtonAnswerProps> = ({
  option,
  onClick,
  className,
  optionIndex,
}) => {
  // converte i numeri dell'indice in lettere
  function indexToLetters(index: number): string {
    let result = "";
    while (index >= 0) {
      result = String.fromCharCode((index % 26) + 65) + result;
      index = Math.floor(index / 26) - 1;
    }
    return result;
  }

  return (
    <button
      onClick={onClick}
      className={twMerge(
        `flex w-full items-center gap-4 rounded-xl bg-white p-3 font-bold focus:border-2 focus:border-violet-500`,
        `${className}`,
      )}
    >
      <span className="flex size-10 min-w-10 items-center justify-center rounded-md bg-slate-200 font-semibold">
        {indexToLetters(optionIndex)}
      </span>
      <p className="tracking-widest">{option}</p>
    </button>
  );
};
