import rings from "../assets/images/pattern-rings.svg";
import circle from "../assets/images/pattern-circle.svg";
import Button from "./Button";
import images from "../data/images.js";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { useWindowWidth } = useGlobalContext();
  const windowWidth = useWindowWidth();
  const isTablet = windowWidth >= 768 && windowWidth < 1280;
  const isDesktop = windowWidth >= 1280;

  return (
    <div className="relative top-36 overflow-x-clip pb-36 font-spaceGrotesk md:pb-28 xl:pb-72">
      {/* sezione immagini */}
      <div className="relative top-0 -z-20 mx-auto flex h-80 flex-col items-center">
        {/* gruppo di rings a sinistra */}
        <img
          src={rings}
          alt="rings"
          className="absolute -left-64 top-4 -z-10 scale-125 xl:-left-10"
        />

        {/* TODO: posiziona l'immagine per desktop */}
        {/* immagine profilo */}
        <picture className="absolute -top-36 w-52 md:right-0 md:w-2/5 xl:-top-44 xl:right-56 xl:w-[30%]">
          <source media="(min-width: 1280px)" srcSet={images.imageProfile.lg} />
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
          className="absolute -right-16 bottom-5 scale-125 md:-bottom-64 xl:-bottom-80 xl:right-[46rem]"
        />
      </div>

      {/* sezione presentazione */}
      <section className="px-10 pt-8 text-center md:absolute md:top-0 md:flex md:w-4/5 md:flex-col md:items-start md:gap-10 md:text-left xl:px-56 xl:pt-20">
        <h2 className="text-4xl font-semibold md:text-8xl">
          Nice to {isTablet && <br />} meet you!{isDesktop && <br />} I&apos;m{" "}
          <span className="border-b-4 border-emerald-400 md:border-b-8">
            Adam Keyes
          </span>
          .
        </h2>
        <p className="mt-8 text-lg text-neutral-400 md:w-4/5 md:text-2xl xl:w-4/6 xl:text-3xl">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Button className="mt-8 xl:mt-14" href="#contact">Contact me</Button>
      </section>
    </div>
  );
};

export default Hero;
