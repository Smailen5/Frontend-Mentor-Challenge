import { useState } from "react";
import { ButtonAnswer, Score } from "../index";

type Questions = {
  question: string;
  options: string[];
  answer: string;
};
type QuizFormProps = {
  title: string;
  icon: string;
  questions: Questions[];
};

export const QuizForm: React.FC<QuizFormProps> = ({
  title,
  icon,
  questions,
}) => {
  // stato per l'indice della domanda corrente
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // risposta selezionata
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  // risposta non selezionata
  const [noSelectedAnswer, setNoSelectedAnswer] = useState(false);
  // form inviato
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  // risposte corrette
  const [correctAnswers, setCorrectAnswers] = useState(0);
  // Stato per gestire se il quiz e completato
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // ottiene la domanda corrente
  const question = questions[currentQuestionIndex];

  const handleSubmitAnswer = () => {
    // controlla che la risposta sia corretta
    //! console.log(selectedAnswer === question.answer);

    if (selectedAnswer === question.answer) {
      //! console.log(selectedAnswer);

      setCorrectAnswers(correctAnswers + 1);
      //! console.log(correctAnswers);
    } else if (selectedAnswer === null) {
      if (selectedAnswer === null || selectedAnswer === false) {
        setNoSelectedAnswer(true);
      }
      return;
      //! console.log("risposta sbagliata");
    }
    setNoSelectedAnswer(false);
    setIsAnswerSubmitted(true); // l'utente ha inviato la risposta
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // ! console.log(selectedAnswer);

      setSelectedAnswer(null);
      // ! console.log(selectedAnswer);

      setIsAnswerSubmitted(false);
    } else {
      // gestisci la fine del test qui, manda il componente ScorePage
      setIsQuizCompleted(true);
    }
  };
  // ! console.log(icon);

  if (isQuizCompleted) {
    return (
      <Score
        title={title}
        icon={icon}
        correctAnswers={correctAnswers}
        questionLength={questions.length}
      />
    );
  }

  return (
    <>
      <div>
        question {currentQuestionIndex + 1} di {questions.length}
      </div>
      <div>
        <h2>{question.question}</h2>
        <div>barra di quante domande sono state fatte e quante ne mancano</div>
        <section className="flex flex-col gap-4">
          {question.options.map((option, optionIndex) => {
            let buttonStyle = "";
            // se la risposta e stata inviata
            if (isAnswerSubmitted) {
              if (option === question.answer) {
                // stile per la risposta corretta
                buttonStyle = "bg-green-500";
              } else if (option === selectedAnswer) {
                // stile per la risposta errata
                buttonStyle = "bg-red-500";
              }
            }
            return (
              <ButtonAnswer
                key={optionIndex}
                option={option}
                onClick={() => setSelectedAnswer(option)}
                isSelected={selectedAnswer === option}
                className={buttonStyle}
              />
            );
          })}
          {!isAnswerSubmitted ? (
            <button onClick={handleSubmitAnswer}>Submit Answer</button>
          ) : (
            <button onClick={handleNextQuestion}>
              Vai alla prossima domanda
            </button>
          )}
          {noSelectedAnswer && (
            <p className="text-center text-red-500">Please select an answer</p>
          )}
        </section>
      </div>
    </>
  );
};
