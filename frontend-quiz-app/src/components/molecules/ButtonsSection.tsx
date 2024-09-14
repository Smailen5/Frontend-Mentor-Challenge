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
        <Button key={quiz.title} {...quiz}>
          {quiz.title}
        </Button>
      ))}
    </section>
  );
};
