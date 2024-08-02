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
    <div className="relative flex flex-col gap-12 overflow-x-clip px-[5%] md:flex-row md:gap-0 lg:min-h-[768px] lg:pt-20 xl:mx-[10%] xl:min-h-fit xl:overflow-visible xl:px-0">
      {/* sezione immagini */}
      <div className="h-80 overflow-hidden xl:order-2">
        {/* gruppo di rings a sinistra */}
        <img
          src={rings}
          alt="rings"
          className="absolute -left-full top-8 -z-10 translate-x-1/3 scale-125 lg:-left-[17rem] lg:top-14 lg:translate-x-0"
        />

        {/* immagine profilo */}
        <picture className="absolute right-1/2 -z-10 w-52 translate-x-1/2 max-md:-top-32 lg:-right-24 lg:-top-16 lg:w-1/2 lg:translate-x-0 xl:right-0 xl:-top-20 xl:w-[35%]">
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
          className="absolute -right-14 bottom-1/2 scale-110 lg:-bottom-16 lg:-right-20 lg:scale-150 xl:-bottom-20 xl:right-80 xl:-translate-x-full"
        />
      </div>

      {/* sezione presentazione */}
      <section className="text-center md:flex md:w-3/4 md:flex-col md:items-start md:gap-10 md:text-left xl:order-1">
        <h2 className="text-4.5xl font-semibold lg:mt-12 lg:text-8xl">
          Nice to {isTablet && <br />} meet you!{isDesktop && <br />} I&apos;m{" "}
          <span className="border-b-4 border-skin-accent md:border-b-8">
            Adam Keyes
          </span>
          .
        </h2>
        <p className="mt-8 text-lg text-skin-variant md:mt-16 md:w-5/6 md:text-2xl lg:mt-12 xl:text-3xl">
          Based in the UK, I&apos;m a front-end developer passionate about
          building accessible web apps that users love.
        </p>
        <Button className="mt-8 lg:mt-20 xl:mt-14" href="#contact">
          Contact me
        </Button>
      </section>
    </div>
  );
};

export default Hero;
