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
          className="bg-purple text-pureWhite rounded-xl p-4 font-semibold tracking-wider"
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="bg-purple text-pureWhite rounded-xl p-4 font-semibold tracking-wider"
        >
          Next Question
        </button>
      )}
      {noSelectedAnswer && (
        <p className="text-red text-center">Please select an answer</p>
      )}
    </>
  );
};
