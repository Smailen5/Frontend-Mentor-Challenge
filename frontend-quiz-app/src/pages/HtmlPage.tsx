import { Navbar, QuizForm } from "../components";
import { useQuiz } from "../utils/useQuiz";

export const HtmlPage = () => {
  const quiz = useQuiz({ selectedQuiz: "HTML" });

  if (!quiz) {
    return <div>Quiz not found</div>;
  }
  
  const { title, icon, questions } = quiz;

  return (
    <>
      <Navbar quizzes={{ title: title, icon: icon }} />
      <QuizForm title={title} icon={icon} questions={questions} />
    </>
  );
};
