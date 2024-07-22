/* eslint-disable no-unused-vars */
import iconFrontend from "../assets/icon-frontend-mentor.svg";
import iconGithub from "../assets/icon-github.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconTwitter from "../assets/icon-twitter.svg";

const Navbar = () => {
  const brandLogo = "adamkeyes";
  return (
    <nav className="flex flex-col items-center py-6 gap-6">
      <header className="font-semibold text-2xl font-spaceGrotesk">
        {brandLogo}
      </header>
      {/* icone social */}
      <div className="flex gap-4">
        <img src={iconGithub} alt="alt" />
        <img src={iconFrontend} alt="alt" />
        <img src={iconLinkedin} alt="alt" />
        <img src={iconTwitter} alt="alt" />
      </div>
    </nav>
  );
};

export default Navbar;
