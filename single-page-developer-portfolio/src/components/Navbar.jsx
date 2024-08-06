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
    <nav className="flex items-center justify-center flex-col gap-4 mt-8 absolute top-0 left-0 right-0 md:flex-row md:justify-between md:mx-8 xl:ml-36 xl:mr-28">
      <header className="font-bold text-2xl md:text-3xl">
        {brandLogo()}
      </header>
      {/* icone social */}
      <div className="flex gap-8 text-xl md:text-2xl">
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
