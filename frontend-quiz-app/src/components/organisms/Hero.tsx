import quizzesData from "../../data.json";
import { ButtonsSection } from "../index";

type Quiz = {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export const Hero = () => {
  const { quizzes }: { quizzes: Quiz[] } = quizzesData; // Specifica il tipo
  return (
    <section>
      <h2>Welcome to the Frontend Quiz!</h2>
      <p>Pick a subject to get started.</p>
      <ButtonsSection quizzes={quizzes}></ButtonsSection>
    </section>
  );
};
