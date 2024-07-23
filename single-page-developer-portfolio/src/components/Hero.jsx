import imageProfile from "../assets/images/image-profile-mobile.webp";
import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden font-spaceGrotesk">
      {/* sezione immagini */}
      <div className="relative top-0 -z-20 mx-auto flex h-80 flex-col items-center">
        <img
          src={rings}
          alt="rings"
          className="absolute -left-64 top-4 -z-10 scale-125"
        />
        <img src={imageProfile} alt="alt" className="absolute -top-36 w-52" />
        <img
          src={circle}
          alt="circle"
          className="absolute -right-16 bottom-5 scale-125"
        />
      </div>
      {/* sezione presentazione */}
      <section className="px-10 pt-8 text-center">
        <h2 className="text-4xl font-semibold">
          Nice to meet you! I&apos;m{" "}
          <span className="border-b-4 border-emerald-400">Adam Keyes</span>.
        </h2>
        <p className="mt-8 text-neutral-400 text-lg">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Button classButton="mt-8">Contact me</Button>
      </section>
    </div>
  );
};

export default Hero;
