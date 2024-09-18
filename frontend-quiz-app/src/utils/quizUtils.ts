type Question = {
  question: string;
  options: string[];
  answer: string;
};

// Controlla se e stata selezionata una risposta e se e corretta
export const handleSubmitAnswer = (
  selectedAnswer: string | null,
  question: Question,
  correctAnswers: number,
  setCorrectAnswers: React.Dispatch<React.SetStateAction<number>>,
  setIsAnswerSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  setNoSelectedAnswer: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  // controlla se viene selezionata una risposta
  if (!selectedAnswer) {
    setNoSelectedAnswer(true);
    return;
  }
  // controlla che la risposta sia corretta
  if (selectedAnswer === question.answer) {
    setCorrectAnswers(correctAnswers + 1);
  }
  setNoSelectedAnswer(false);
  setIsAnswerSubmitted(true);
};

// Seleziona la prossima domanda
export const handleNextQuestion = (
  currentQuestionIndex: number,
  questions: Question[],
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>,
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string | null>>,
  setIsAnswerSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  setIsQuizCompleted: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    setSelectedAnswer(null);

    setIsAnswerSubmitted(false);
  } else {
    // se si risponde a tutte le domande termina il quiz
    setIsQuizCompleted(true);
  }
};
