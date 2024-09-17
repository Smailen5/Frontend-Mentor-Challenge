import IconQuiz from "../molecules/IconQuiz";

type ButtonProps = {
  children: React.ReactNode;
  title: string;
  icon: string;
};

export const Button: React.FC<ButtonProps> = ({ children, icon }) => {
  return (
    <button className="flex w-full items-center gap-4 rounded-lg bg-white p-4">
      <IconQuiz icon={icon} />
      {children}
    </button>
  );
};
