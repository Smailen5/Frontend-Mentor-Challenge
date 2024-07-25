/* eslint-disable no-unused-vars */
import { github, frontend, twitter, linkedin } from "../data/socialIcon";
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
        <div className="flex gap-8 xl:pr-8">
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
      </div>
    </nav>
  );
};

export default Navbar;
