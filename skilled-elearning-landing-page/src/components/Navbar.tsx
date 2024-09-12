import logo from "../assets/logo-dark.svg";
import { Button } from "./ui/Button";

export const Navbar = () => {
  return (
    <header className="relative z-50 p-4 md:p-6 md:px-10 lg:px-16 xl:px-36">
      <nav className="flex items-center justify-between">
        <img src={logo} alt="logo" className="w-20" />
        <Button size={"lg"} >
          Get Started
        </Button>
      </nav>
    </header>
  );
};
