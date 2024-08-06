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
    <div className="bg-skin-semiBlack flex items-center justify-center flex-col gap-4 pb-12">
      <header className="text-2xl font-bold">{brandLogo()}</header>
      {/* icone social */}
      <div className="flex gap-8 text-xl">
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
    </div>
  );
};

export default Navbar;
