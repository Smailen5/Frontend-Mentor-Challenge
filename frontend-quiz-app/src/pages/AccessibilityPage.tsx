import { QuizForm } from "../components";
import { useQuiz } from "../utils/useQuiz";

export const AccessibilityPage = () => {
  const questions = useQuiz({ selectedQuiz: "Accessibility" });

  if (!questions) {
    return <div>Quiz not found</div>;
  }
  return <QuizForm questions={questions} />;
};
