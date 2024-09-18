import { useState } from "react";
// import { ButtonAnswer, Score } from "../index";
// import { IconsAnswer } from "../molecules/IconsAnswer";
import { Score } from "../index";
import { QuizAnswer } from "../molecules/QuizAnswer";
import { handleSubmitAnswer, handleNextQuestion } from "../../utils/quizUtils";

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
  // const handleSubmitAnswer = () => {
  //   // se non selezioni niente
  //   if (selectedAnswer === null) {
  //     setNoSelectedAnswer(true);
  //     return;
  //   }
  //   // controlla che la risposta sia corretta
  //   if (selectedAnswer === question.answer) {
  //     setCorrectAnswers(correctAnswers + 1);
  //   }
  //   setNoSelectedAnswer(false);
  //   setIsAnswerSubmitted(true); // l'utente ha inviato la risposta
  // };

  // const handleNextQuestion = () => {
  //   if (currentQuestionIndex < questions.length - 1) {
  //     setCurrentQuestionIndex(currentQuestionIndex + 1);

  //     setSelectedAnswer(null);

  //     setIsAnswerSubmitted(false);
  //   } else {
  //     // gestisci la fine del test qui, manda il componente ScorePage
  //     setIsQuizCompleted(true);
  //   }
  // };

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
        {/* {question.options.map((option, optionIndex) => {
          let buttonStyle = "";
          let indexStyle = "";
          let showCorrectIcon = false;
          let showErrorIcon = false;
          // se la risposta e stata inviata
          if (isAnswerSubmitted) {
            console.log(isAnswerSubmitted);

            if (option === question.answer) {
              console.log(option === question.answer);
              // stile per la risposta corretta
              buttonStyle = "border-2 border-green-500";
              indexStyle = "bg-green-500 text-white";
              showCorrectIcon = true;
            } else if (
              option === selectedAnswer &&
              option !== question.answer
            ) {
              // stile per la risposta errata
              buttonStyle = "border-2 border-red-500";
              indexStyle = "bg-red-500 text-white";
              showErrorIcon = true;
            }
          }
          return (
            <ButtonAnswer
              key={optionIndex}
              optionIndex={optionIndex}
              option={option}
              onClick={() => setSelectedAnswer(option)}
              isSelected={selectedAnswer === option}
              classButton={buttonStyle}
              classIndex={indexStyle}
            >
              <IconsAnswer
                showCorrectIcon={showCorrectIcon}
                showErrorIcon={showErrorIcon}
              />
            </ButtonAnswer>
          );
        })} */}
        {!isAnswerSubmitted ? (
          <button
            onClick={handleSubmit}
            className="rounded-xl bg-purple-600 p-4 font-semibold tracking-wider text-white"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="rounded-xl bg-purple-600 p-4 font-semibold tracking-wider text-white"
          >
            Next Question
          </button>
        )}
        {noSelectedAnswer && (
          <p className="text-center text-red-500">Please select an answer</p>
        )}
      </section>
    </>
  );
};
