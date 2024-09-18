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
      <h2 className="text-4xl font-light">
        Quiz completed <br />
        <span className="font-bold">You scored...</span>
      </h2>

      <div className="flex flex-col gap-3">
        <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-white p-8">
          <IconQuiz title={title} icon={icon} />
          <span className="text-7xl font-bold">
            {correctAnswers ? correctAnswers : "0"}
          </span>
          <span>of out {questionLength}</span>
        </div>
        <Link to="/">
          <button className="w-full rounded-xl bg-purple-600 p-3 font-semibold text-white">
            Play Again
          </button>
        </Link>
      </div>
    </section>
  );
};
