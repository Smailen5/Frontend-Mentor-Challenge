/* eslint-disable no-unused-vars */
import iconFrontend from "../assets/icon-frontend-mentor.svg";
import iconGithub from "../assets/icon-github.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconTwitter from "../assets/icon-twitter.svg";

const Navbar = () => {
  const brandLogo = "adamkeyes";
  return (
    <nav className="flex flex-col items-center gap-6 py-6">
      <header className="font-spaceGrotesk text-2xl font-semibold">
        {brandLogo}
      </header>
      {/* icone social */}
      <div className="flex gap-8">
      <a href="#">
          <img src={iconGithub} alt="alt" />
        </a>
        <a href="#">
          <img src={iconFrontend} alt="alt" />
        </a>
        <a href="#">
          <img src={iconLinkedin} alt="alt" />
        </a>
        <a href="#">
          <img src={iconTwitter} alt="alt" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
