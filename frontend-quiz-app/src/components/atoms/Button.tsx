import { IconQuiz } from "../index";

type ButtonProps = {
  title: string;
  icon: string;
};

export const Button: React.FC<ButtonProps> = ({ icon, title }) => {
  return (
    <button className="bg-pureWhite text-darkNavy dark:bg-navy flex w-full items-center gap-2 rounded-xl p-3 font-bold">
      <IconQuiz icon={icon} title={title} />
    </button>
  );
};
