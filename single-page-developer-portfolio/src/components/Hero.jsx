import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";
import Button from "./Button";
import images from "../data/images.js";
import { useEffect, useState } from "react";

// controlla se cambia la larghezza e ritorna la larghezza attuale
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
};

const Hero = () => {
  const width = useWindowWidth();
  const isTablet = width >= 768;

  return (
    <div className="relative top-36 overflow-x-clip pb-36 font-spaceGrotesk md:pb-28">
      {/* sezione immagini */}
      <div className="relative top-0 -z-20 mx-auto flex h-80 flex-col items-center">
        {/* gruppo di rings a sinistra */}
        <img
          src={rings}
          alt="rings"
          className="absolute -left-64 top-4 -z-10 scale-125"
        />

        {/* immagine profilo */}
        <picture className="absolute -top-36 w-52 md:right-0 md:w-2/5">
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
          className="absolute -right-16 bottom-5 scale-125 md:-bottom-64"
        />
      </div>

      {/* sezione presentazione */}
      <section className="px-10 pt-8 text-center md:absolute md:top-0 md:flex md:w-4/5 md:flex-col md:items-start md:gap-10 md:text-left">
        <h2 className="text-4xl font-semibold md:text-8xl">
          Nice to {isTablet && <br />} meet you! I&apos;m{" "}
          <span className="border-b-8 border-emerald-400">Adam Keyes</span>.
        </h2>
        <p className="mt-8 text-lg text-neutral-400 md:w-4/5 md:text-2xl">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Button classButton="mt-8">Contact me</Button>
      </section>
    </div>
  );
};

export default Hero;
