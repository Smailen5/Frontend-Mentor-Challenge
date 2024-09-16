import { Link } from "react-router-dom";
import { Button } from "../atoms/Button";

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
          <Button key={quiz.title} {...quiz}>
            {quiz.title}
          </Button>
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
};

export const ButtonAnswer: React.FC<ButtonAnswerProps> = ({
  option,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={`bg-red-200 p-2 ${className}`}>
      {option}
    </button>
  );
};
