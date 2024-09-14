import { QuizForm } from "../components";
import { useQuiz } from "../utils/useQuiz";

export const JsPage = () => {
  const questions = useQuiz({ selectedQuiz: "JavaScript" });

  if (!questions) {
    return <div>Quiz not found</div>;
  }
  return <QuizForm questions={questions} />;
};
