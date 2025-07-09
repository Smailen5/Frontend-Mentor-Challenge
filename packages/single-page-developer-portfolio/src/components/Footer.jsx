/* eslint-disable no-unused-vars */
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
    <div className="flex flex-col gap-8 w-full">
        <hr />
      <div className="flex flex-col items-center justify-center gap-4 bg-skin-semiBlack pb-12 md:w-full md:flex-row md:justify-between xl:pb-20">
        <header className="text-2xl font-bold md:text-3xl">{brandLogo()}</header>
        {/* icone social */}
        <div className="flex gap-8 text-xl md:text-2xl">
          <a href="#">
            <SiGithub className="hover:fill-skin-accent" />
          </a>
          <a href="#">
            <SiFrontendmentor className="hover:fill-skin-accent" />
          </a>
          <a href="#">
            <SiLinkedin className="hover:fill-skin-accent" />
          </a>
          <a href="#">
            <SiTwitter className="hover:fill-skin-accent" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
