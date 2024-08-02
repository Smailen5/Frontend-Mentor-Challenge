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
    <nav className="flex flex-col items-center gap-6 pt-6 md:mx-[10%] md:flex-row md:justify-between xl:pt-10">
      <header className="text-2xl font-semibold md:text-4xl">
        {brandLogo()}
      </header>
      {/* icone social */}
      <div className="flex h-auto gap-8">
        <a href="#">
          <SiGithub className="hover:fill-skin-accent md:size-8" />
        </a>
        <a href="#">
          <SiFrontendmentor className="hover:fill-skin-accent md:size-8" />
        </a>
        <a href="#">
          <SiLinkedin className="hover:fill-skin-accent md:size-8" />
        </a>
        <a href="#">
          <SiTwitter className="hover:fill-skin-accent md:size-8" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
