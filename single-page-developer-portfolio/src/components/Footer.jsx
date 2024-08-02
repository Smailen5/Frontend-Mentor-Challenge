import {
  SiFrontendmentor,
  SiGithub,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { brandLogo } = useGlobalContext();
  return (
    <div className="bg-skin-semiBlack px-4 md:px-10 xl:px-56 xl:pb-12">
      <hr className="border-skin-accent-primary" />
      <footer className="flex flex-col items-center gap-6 py-12 md:flex-row md:justify-between">
        <header className="font-spaceGrotesk text-2xl font-semibold md:text-4xl">
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
      </footer>
    </div>
  );
};

export default Navbar;
