import quizzesData from "../../data.json";
import { ButtonsSection } from "../index";

type Quiz = {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};

export const Hero = () => {
  const { quizzes }: { quizzes: Quiz[] } = quizzesData;
  return (
    <section className="flex flex-col gap-10 pt-6">
      <div className="space-y-4">
        <h2 className="text-darkNavy dark:text-lightGrey text-4xl font-light">
          Welcome to the{" "}
          <strong className="font-semibold">Frontend Quiz!</strong>
        </h2>
        <p className="text-greyNavy dark:text-lightBluish italic">
          Pick a subject to get started.
        </p>
      </div>
      <ButtonsSection quizzes={quizzes} />
    </section>
  );
};
