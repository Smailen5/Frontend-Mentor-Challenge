import { useState } from "react";
import { ButtonAnswer } from "../index";

type Questions = {
  question: string;
  options: string[];
  answer: string;
};
type QuizFormProps = {
  questions: Questions[];
};

export const QuizForm: React.FC<QuizFormProps> = ({ questions }) => {
  // stato per l'indice della domanda corrente
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // gestisci la fine del test qui, manda il componente ScorePage
      alert("test complete");
    }
  };

  // ottiene la domanda corrente
  const question = questions[currentQuestionIndex];

  return (
    <>
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
    </>
  );
};
