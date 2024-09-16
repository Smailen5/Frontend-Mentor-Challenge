import { Navbar, QuizForm } from "../components";
import { useQuiz } from "../utils/useQuiz";

export const HtmlPage = () => {
  const questions = useQuiz({ selectedQuiz: "HTML" });

  if (!questions) {
    return <div>Quiz not found</div>;
  }

  return (
    <>
      <Navbar quizzes={{ title: "HTML quiz" }} />
      <QuizForm questions={questions} />
    </>
  );
};
