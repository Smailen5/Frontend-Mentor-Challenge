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
    <div className="relative mx-[5%] md:mx-[10%] flex flex-col gap-12 xl:min-h-fit xl:pt-20">
      {/* sezione immagini */}
      <div className="h-80 xl:order-2">
        {/* gruppo di rings a sinistra */}
        <img
          src={rings}
          alt="rings"
          className="absolute -left-52 top-8 -z-10 scale-125 xl:-left-10"
        />

        {/* immagine profilo */}
        <picture className="absolute -top-32 right-1/2 w-52 translate-x-1/2 xl:w-[30%]">
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
          className="absolute -right-28 bottom-1/2 scale-110"
        />
      </div>

      {/* sezione presentazione */}
      <section className="text-center md:top-0 md:flex md:w-3/5 md:flex-col md:items-start md:gap-10 md:text-left xl:order-1">
        <h2 className="text-4.5xl font-semibold md:text-8xl">
          Nice to {isTablet && <br />} meet you!{isDesktop && <br />} I&apos;m{" "}
          <span className="border-b-4 border-skin-accent md:border-b-8">
            Adam Keyes
          </span>
          .
        </h2>
        <p className="mt-8 text-lg text-skin-variant md:w-4/5 md:text-2xl xl:text-3xl">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Button className="mt-8 xl:mt-14" href="#contact">
          Contact me
        </Button>
      </section>
    </div>
  );
};

export default Hero;
