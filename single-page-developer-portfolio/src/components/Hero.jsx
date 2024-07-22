import imageProfile from "../assets/images/image-profile-mobile.webp";
import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative top-0 -z-20 mx-auto flex flex-col items-center h-80">
        <img
          src={rings}
          alt="rings"
          className="absolute -left-64 top-4 -z-10 scale-125"
        />
        <img src={imageProfile} alt="alt" className="absolute -top-36 w-52" />
        <img src={circle} alt="circle" className="absolute -right-16 bottom-0" />
      </div>
    </div>
  );
};

export default Hero;
