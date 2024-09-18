type ButtonSubmitProps = {
  isAnswerSubmitted: boolean;
  handleSubmit: () => void;
  handleNext: () => void;
  noSelectedAnswer: boolean;
};

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({
  isAnswerSubmitted,
  handleSubmit,
  handleNext,
  noSelectedAnswer,
}) => {
  return (
    <>
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
    </>
  );
};
