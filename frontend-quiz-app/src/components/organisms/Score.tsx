import { Link } from "react-router-dom";
import { IconQuiz } from "../index";

type ScoreProps = {
  title: string;
  icon: string;
  correctAnswers?: number;
  questionLength?: number;
};
export const Score: React.FC<ScoreProps> = ({
  title,
  icon,
  correctAnswers,
  questionLength,
}) => {
  return (
    <section className="flex flex-col gap-6 pt-10">
      <h2 className="text-darkNavy dark:text-pureWhite text-4xl font-light">
        Quiz completed <br />
        <span className="font-bold">You scored...</span>
      </h2>

      <div className="flex flex-col gap-3">
        <div className="bg-pureWhite dark:bg-navy flex w-full flex-col items-center gap-4 rounded-xl p-8">
          <IconQuiz title={title} icon={icon} />
          <span className="text-darkNavy dark:text-pureWhite text-7xl font-bold">
            {correctAnswers ? correctAnswers : "0"}
          </span>
          <span className="text-greyNavy dark:text-lightBluish">
            out of {questionLength}
          </span>
        </div>
        <Link to="/">
          <button className="bg-purple text-pureWhite w-full rounded-xl p-3 font-semibold">
            Play Again
          </button>
        </Link>
      </div>
    </section>
  );
};
