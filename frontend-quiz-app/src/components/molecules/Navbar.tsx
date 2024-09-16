import { ToggleButton } from "../atoms/ToggleButton";
type NavbarProps = {
  quizzes?: { title: string };
};
export const Navbar: React.FC<NavbarProps> = ({ quizzes }) => {
  // navbar nelle pagine quiz
  if (quizzes) {
    return (
      <header className="flex justify-between">
        <h2>{quizzes.title}</h2>
        <ToggleButton />
      </header>
    );
  }
  return (
    <header className="mx-auto flex max-w-screen-lg justify-end px-4 py-6">
      {/* Navbar */}
      <nav className="">
        <ToggleButton />
      </nav>
    </header>
  );
};
