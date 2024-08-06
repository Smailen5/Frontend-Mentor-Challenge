/* eslint-disable no-unused-vars */
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

  console.log(!isDesktop);
  

  return (
    <section className="relative mt-28 flex h-[640px] flex-col items-center gap-12 overflow-x-clip md:block md:h-[30rem]">
      <img
          src={rings}
          alt="rings icon"
          className="absolute -left-60 top-8 -z-20 scale-125 md:-left-80 md:-top-4 md:absolute"
        />
      {/* immagine profilo e icone */}
      <div className="relative w-full flex-1 md:flex-none md:-z-10 md:static">
        {/* <img
          src={rings}
          alt="rings icon"
          className="relative -left-60 top-8 -z-20 scale-125 md:-left-80 md:top-0 md:hidden"
        /> */}
        {/* immagine profilo con div per centrarla */}
        <div className="flex justify-center">
          <picture className="absolute -top-28 -z-10 size-[11.5rem] md:right-0 md:size-80">
            <source media="(min-width: 1280px)" srcSet={images.imageProfile.lg} />
            <source media="(min-width: 768px)" srcSet={images.imageProfile.md} />
            <img src={images.imageProfile.sm} alt="image profile" />
          </picture>
        </div>

        <img
          src={circle}
          alt="icon circle"
          className="absolute -right-1/3 bottom-0 -z-10 sm:-right-1/4 sm:-translate-x-3/4 -translate-x-1/3 md:-right-16 md:bottom-0 md:translate-x-0 "
        />
      </div>

      <section className="flex-1 md:absolute md:flex-none md:mt-10 md:mx-4">
        <div className="mx-4 flex flex-col items-center gap-8 text-center md:items-start md:w-2/3 md:text-left md:gap-12 lg:gap-16">
          <h2 className="text-4xl font-bold md:text-7xl">
            Nice to{isTablet && !isDesktop && <br/>} meet you! I&apos;m{" "}
            <span className="border-b-2 border-skin-accent">Adam Keyes</span>.
          </h2>
          <p className="text-skin-variant md:text-lg md:w-11/12">
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <Button type="button" href="#">
            contact me
          </Button>
        </div>
      </section>
    </section>
  );
};

export default Hero;
