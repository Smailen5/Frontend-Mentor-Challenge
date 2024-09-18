import { IconQuiz, ToggleButton } from "../index";

type NavbarProps = {
  quizzes?: { title: string; icon: string };
};
export const Navbar: React.FC<NavbarProps> = ({ quizzes }) => {
  // navbar nelle pagine quiz
  if (quizzes) {
    return (
      <header className="flex items-center justify-between">
        <IconQuiz title={quizzes.title} icon={quizzes.icon} />
        <ToggleButton />
      </header>
    );
  }
  return (
    <header className="mx-auto flex max-w-screen-lg justify-end py-2">
      <nav className="">
        <ToggleButton />
      </nav>
    </header>
  );
};
