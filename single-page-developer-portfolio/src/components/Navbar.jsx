/* eslint-disable no-unused-vars */
import { github, frontend, twitter, linkedin } from "../data/socialIcon";

const Navbar = () => {
  const brandLogo = "adamkeyes";
  return (
    <nav className="absolute flex w-full flex-col items-center pt-6">
      <div className="absolute flex w-full flex-col items-center gap-6 px-8 md:flex-row md:justify-between">
        <header className="font-spaceGrotesk text-2xl font-semibold">
          {brandLogo}
        </header>
        {/* icone social */}
        <div className="flex gap-8">
          <a href="#">
            <img src={github} alt="alt" />
          </a>
          <a href="#">
            <img src={frontend} alt="alt" />
          </a>
          <a href="#">
            <img src={linkedin} alt="alt" />
          </a>
          <a href="#">
            <img src={twitter} alt="alt" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
