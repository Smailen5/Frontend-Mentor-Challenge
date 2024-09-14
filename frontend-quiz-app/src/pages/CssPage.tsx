import { QuizForm } from "../components";
import { useQuiz } from "../utils/useQuiz";

export const CssPage = () => {
  const questions = useQuiz({ selectedQuiz: "CSS" });

  if (!questions) {
    return <div>Quiz not found</div>;
  }
  return <QuizForm questions={questions} />;
};
