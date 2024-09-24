import { IconQuiz } from "../index";

type ButtonProps = {
  title: string;
  icon: string;
};

export const Button: React.FC<ButtonProps> = ({ icon, title }) => {
  return (
    <button className="bg-pureWhite text-darkNavy dark:bg-navy w-full rounded-xl p-3 font-bold md:rounded-3xl">
      <IconQuiz icon={icon} title={title} />
    </button>
  );
};
