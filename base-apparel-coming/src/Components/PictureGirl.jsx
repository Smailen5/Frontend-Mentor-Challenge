import heroDesktop from "../assets/images/hero-desktop.jpg";
import heroMobile from "../assets/images/hero-mobile.jpg";

function PictureGirl() {
  return (
    <picture className="flex-shrink-0 h-screen">
      <source media="(min-width: 1280px)" srcSet={heroDesktop} />
      <img
        src={heroMobile}
        alt="hero"
        className="w-full xl:h-full"
      />
    </picture>
  );
}

export default PictureGirl;
