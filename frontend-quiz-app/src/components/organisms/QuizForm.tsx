import { useState } from "react";
import { handleNextQuestion, handleSubmitAnswer } from "../../utils/quizUtils";
import { ButtonSubmit, QuizAnswer, Score } from "../index";

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
      <div className="space-y-2 py-10 md:space-y-8 md:py-12">
        <p className="dark:text-lightBluish text-greyNavy italic md:text-xl">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>

        <h2 className="dark:text-pureWhite text-navy text-xl font-medium tracking-wide md:text-3xl md:leading-snug md:tracking-wider">
          {question.question}
        </h2>
        {/* //! NON DIMENTICARE di aggiungere la barra di progresso */}
        <div>barra di quante domande sono state fatte e quante ne mancano</div>
      </div>
      <section className="flex flex-col gap-3 md:gap-6">
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
