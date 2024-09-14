import { useState } from "react";
import { ButtonAnswer } from "../components";
import quizzesData from "../data.json";

type Questions = {
  question: string;
  options: string[];
  answer: string;
};

type Quiz = {
  title: string;
  icon: string;
  questions: Questions[];
};

export const HtmlPage = () => {
  // stato per l'indice della domanda corrente
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Trova il quiz con il titolo HTML
  const htmlQuiz = quizzesData.quizzes.find(
    (quiz: Quiz) => quiz.title === "HTML",
  );
  // verifica se esiste il quiz
  if (!htmlQuiz) {
    return <div>Quiz not found</div>;
  }

  const { questions } = htmlQuiz;

  // funzione per passare alla domanda successiva
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // gestisci la fine del test qui
      alert("test complete");
    }
  };

  const question = questions[currentQuestionIndex];
  return (
    <div>
      <div>
        question {currentQuestionIndex + 1} di {questions.length}
      </div>
      <div>
        <h2>{question.question}</h2>
        <div>barra di quante domande sono state fatte e quante ne mancano</div>
        <section className="flex flex-col gap-4">
          {question.options.map((option, optionIndex) => (
            <ButtonAnswer key={optionIndex} option={option} />
          ))}
          <button onClick={goToNextQuestion}>vai avanti</button>
        </section>
      </div>
    </div>
  );
};
