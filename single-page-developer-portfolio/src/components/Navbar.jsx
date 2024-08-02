/* eslint-disable no-unused-vars */
// import { github, frontend, twitter, linkedin } from "../data/socialIcon";
import { SiGithub, SiFrontendmentor, SiLinkedin, SiTwitter } from "react-icons/si";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { brandLogo } = useGlobalContext();
  return (
    <nav className="absolute flex w-full flex-col items-center pt-6 xl:pt-10">
      <div className="absolute flex w-full flex-col items-center gap-6 px-10 md:flex-row md:justify-between xl:px-56">
        <header className="text-2xl font-semibold md:text-4xl">
          {brandLogo()}
        </header>
        {/* icone social */}
        <div className="flex h-auto gap-8">
          <a href="#">
            <SiGithub className="hover:fill-emerald-400 md:size-8" />
          </a>
          <a href="#">
            <SiFrontendmentor className="hover:fill-emerald-400 md:size-8" />
          </a>
          <a href="#">
            <SiLinkedin className="hover:fill-emerald-400 md:size-8" />
          </a>
          <a href="#">
            <SiTwitter className="hover:fill-emerald-400 md:size-8" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
