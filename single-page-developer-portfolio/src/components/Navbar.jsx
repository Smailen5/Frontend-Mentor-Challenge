import {
  SiGithub,
  SiFrontendmentor,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { brandLogo } = useGlobalContext();
  return (
    <nav className="flex items-center justify-center flex-col gap-4 mt-8 absolute top-0 left-0 right-0">
      <header className="font-bold text-2xl">
        {brandLogo()}
      </header>
      {/* icone social */}
      <div className="flex gap-8 text-xl">
        <a href="#">
          <SiGithub className="" />
        </a>
        <a href="#">
          <SiFrontendmentor className="" />
        </a>
        <a href="#">
          <SiLinkedin className="" />
        </a>
        <a href="#">
          <SiTwitter className="" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
