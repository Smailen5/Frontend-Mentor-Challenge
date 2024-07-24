/* eslint-disable no-unused-vars */
import { github, frontend, twitter, linkedin } from "../data/socialIcon";

const Navbar = () => {
  const brandLogo = "adamkeyes";
  return (
    <div className="px-4 md:px-10 bg-neutral-800">
      <hr className="border-neutral-400 md:border-neutral-100" />
      <footer className="flex flex-col items-center gap-6 py-12 md:flex-row md:justify-between">
        <header className="font-spaceGrotesk text-2xl font-semibold md:text-4xl">
          {brandLogo}
        </header>
        {/* icone social */}
        <div className="flex gap-8 md:w- h-auto">
          <a href="#">
            <img src={github} alt="alt" className="md:w-8" />
          </a>
          <a href="#">
            <img src={frontend} alt="alt" className="md:w-8" />
          </a>
          <a href="#">
            <img src={linkedin} alt="alt" className="md:w-8" />
          </a>
          <a href="#">
            <img src={twitter} alt="alt" className="md:w-8" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;


// absolute flex w-full flex-col items-center gap-6 px-10 md:flex-row md:justify-between