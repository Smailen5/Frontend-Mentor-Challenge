import { ToggleButton } from "../atoms/ToggleButton";
import IconQuiz from "./IconQuiz";

type NavbarProps = {
  quizzes?: { title: string; icon: string };
};
export const Navbar: React.FC<NavbarProps> = ({ quizzes }) => {
  // navbar nelle pagine quiz
  if (quizzes) {
    return (
      <header className="flex justify-between dark:bg-slate-400">
        <IconQuiz title={quizzes.title} icon={quizzes.icon} />
        <h2>{quizzes.title}</h2>
        <ToggleButton />
      </header>
    );
  }
  return (
    <header className="mx-auto flex max-w-screen-lg justify-end px-4 py-6 dark:bg-slate-400">
      {/* Navbar */}
      <nav className="">
        <ToggleButton />
      </nav>
    </header>
  );
};
