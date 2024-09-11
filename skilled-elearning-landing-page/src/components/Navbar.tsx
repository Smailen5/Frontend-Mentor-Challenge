import logo from "../assets/logo-dark.svg";
import { Button } from "./ui/Button";

export const Navbar = () => {
  return (
    <header className="p-4">
      <nav className="flex justify-between items-center">
        <img src={logo} alt="logo" className="w-20" />
        <Button size={"lg"} className="text-lg">
          Get Started
        </Button>
      </nav>
    </header>
  );
};
