import { iconMaps } from "../../assets/images/index";
import IconQuiz from "../molecules/IconQuiz";

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
  const iconSrc = iconMaps[icon];
  console.log(iconSrc);

  return (
    <section className="flex flex-col gap-6 pt-4">
      <h2 className="text-4xl font-light">
        Quiz completed <br />
        <span className="font-bold">You scored...</span>
      </h2>
      <div className="space-y-2">
        <div className="flex w-full flex-col items-center gap-4 rounded-md bg-red-200 p-4">
          <IconQuiz title={title} icon={icon} />
          <h3>{title}</h3>
        </div>
        <span className="text-7xl font-bold">{correctAnswers}</span>
        <span>of out {questionLength}</span>
      </div>
      <button className="w-full rounded-md bg-violet-500 p-2 text-white">
        Play Again
      </button>
    </section>
  );
};
