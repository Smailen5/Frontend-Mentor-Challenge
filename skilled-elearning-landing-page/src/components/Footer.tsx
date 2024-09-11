import logo from "../assets/logo-light.svg";
import { Button } from "./ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-clr-blue p-4 py-6 md:px-10">
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="w-20" />
        <Button variant={"blue"} size={"sm"}>
          Get Started
        </Button>
      </div>
    </footer>
  );
};
