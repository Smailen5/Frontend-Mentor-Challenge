import imageProfile from "../assets/images/image-profile-mobile.webp";
import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden font-spaceGrotesk">
      {/* sezione immagini */}
      <div className="relative top-0 -z-20 mx-auto flex flex-col items-center h-80">
        <img
          src={rings}
          alt="rings"
          className="absolute -left-64 top-4 -z-10 scale-125"
        />
        <img src={imageProfile} alt="alt" className="absolute -top-36 w-52" />
        <img
          src={circle}
          alt="circle"
          className="absolute -right-16 bottom-0"
        />
      </div>
      {/* sezione presentazione */}
      <section className="text-center pt-8 px-10">
        <h2 className="text-4xl font-semibold">Nice to meet you! I&apos;m Adam Keyes.</h2>
        <p className="mt-8 text-neutral-400">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
      </section>
    </div>
  );
};

export default Hero;
