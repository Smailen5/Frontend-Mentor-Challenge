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
    <nav className="">
      <header className="">
        {brandLogo()}
      </header>
      {/* icone social */}
      <div className="">
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
