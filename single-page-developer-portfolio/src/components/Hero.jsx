import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";
import Button from "./Button";
import images from "../data/images.js";

const Hero = () => {
  return (
    <div className="relative top-36 overflow-x-clip font-spaceGrotesk md:top-36">
      {/* sezione immagini */}
      <div className="relative top-0 -z-20 mx-auto flex h-80 flex-col items-center">
        {/* gruppo di rings a sinistra */}
        <img
          src={rings}
          alt="rings"
          className="absolute -left-64 top-4 -z-10 scale-125"
        />

        {/* immagine profilo */}
        <picture className="absolute -top-36 w-52 md:right-0 md:w-1/3">
          <source media="(min-width: 768px)" srcSet={images.imageProfile.md} />
          <img
            src={images.imageProfile.sm}
            alt="immagine profilo"
            className=""
          />
        </picture>

        {/* cerchio a destra */}
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
        <p className="mt-8 text-lg text-neutral-400">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Button classButton="mt-8">Contact me</Button>
      </section>
    </div>
  );
};

export default Hero;
