import quizzesData from "../../data.json";
import { Button } from "../atoms/Button";

interface Quiz {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}
export const Hero = () => {
  const { quizzes }: { quizzes: Quiz[] } = quizzesData; // Specifica il tipo
  // const { title } = quizzes;
  return (
    <section>
      <h2>Welcome to the Frontend Quiz!</h2>
      <p>Pick a subject to get started.</p>
      <section className="flex flex-col gap-4">
        {quizzes.map((quiz) => (
          <Button key={quiz.title} {...quiz}>
            {quiz.title}
          </Button>
        ))}
      </section>
    </section>
  );
};
