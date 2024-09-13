import { ToggleButton } from "./ToggleButton";
type NavbarProps = {
  quizzes?: { title: string };
};
export const Navbar: React.FC<NavbarProps> = ({ quizzes }) => {
  // navbar nelle pagine quiz
  if (quizzes) {
    return (
      <header className="flex justify-between">
        {quizzes.title}
        <ToggleButton />
      </header>
    );
  }
  return (
    <header className="flex justify-end mx-auto px-4 py-6 max-w-screen-lg">
      {/* Navbar */}
      <nav className="">
        <ToggleButton />
      </nav>
    </header>
  );
};
