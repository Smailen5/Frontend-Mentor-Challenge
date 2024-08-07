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
    <nav className="absolute left-0 right-0 top-0 mt-8 flex flex-col items-center justify-center gap-4 md:mx-8 md:flex-row md:justify-between xl:ml-36 xl:mr-40 2xl:mt-14">
      <header className="text-2xl font-bold md:text-3xl 2xl:text-4xl">{brandLogo()}</header>
      {/* icone social */}
      <div className="flex gap-8 text-xl md:text-2xl 2xl:text-4xl">
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
    </nav>
  );
};

export default Navbar;
