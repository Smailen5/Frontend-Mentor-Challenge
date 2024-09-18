import { useState } from "react";
import { handleNextQuestion, handleSubmitAnswer } from "../../utils/quizUtils";
import { Score } from "../index";
import { QuizAnswer } from "../molecules/QuizAnswer";
import { ButtonSubmit } from "../molecules/ButtonSubmit";

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

  const handleSubmit = () => {
    handleSubmitAnswer(
      selectedAnswer,
      question,
      correctAnswers,
      setCorrectAnswers,
      setIsAnswerSubmitted,
      setNoSelectedAnswer,
    );
  };
  const handleNext = () => {
    handleNextQuestion(
      currentQuestionIndex,
      questions,
      setCurrentQuestionIndex,
      setSelectedAnswer,
      setIsAnswerSubmitted,
      setIsQuizCompleted,
    );
  };

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
      <div className="space-y-2 py-10">
        <p className="italic">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>

        <h2 className="text-xl font-semibold">{question.question}</h2>

        <div>barra di quante domande sono state fatte e quante ne mancano</div>
      </div>
      <section className="flex flex-col gap-3">
        <QuizAnswer
          question={question}
          isAnswerSubmitted={isAnswerSubmitted}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
        <ButtonSubmit
          isAnswerSubmitted={isAnswerSubmitted}
          handleSubmit={handleSubmit}
          handleNext={handleNext}
          noSelectedAnswer={noSelectedAnswer}
        />
      </section>
    </>
  );
};
