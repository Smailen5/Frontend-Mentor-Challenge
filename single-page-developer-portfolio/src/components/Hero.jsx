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
    <>
      <img
        src={rings}
        alt="rings icon"
        className="absolute -left-1/3 top-36 -z-20 -translate-x-1/4 md:-left-1/2 md:top-20 md:translate-x-1/4 lg:-left-1/3 xl:-left-1/4 2xl:left-0 2xl:top-44 2xl:-translate-x-1/4 2xl:scale-150"
      />

      <section className="relative mt-28 flex h-[640px] flex-col items-center gap-12 overflow-x-clip md:h-[59.7vh] lg:items-start xl:h-[65vh] 2xl:h-[80vh]">
        {/* immagine profilo e icone */}
        <div className="md:flex-non relative w-full flex-1 md:static md:-z-10">
          {/* immagine profilo con div per centrarla */}
          <div className="flex justify-center">
            <picture className="absolute -top-28 -z-10 size-[11.5rem] md:right-0 md:size-80 xl:right-36 xl:size-[30%]">
              <source
                media="(min-width: 1280px)"
                srcSet={images.imageProfile.lg}
              />
              <source
                media="(min-width: 768px)"
                srcSet={images.imageProfile.md}
              />
              <img src={images.imageProfile.sm} alt="image profile" />
            </picture>
            <img
              src={circle}
              alt="icon circle"
              className="absolute -right-1/4 bottom-0 -z-10 -translate-x-1/3 sm:-right-1/4 sm:-translate-x-3/4 md:-right-16 md:bottom-0 md:translate-x-0 xl:bottom-20 xl:right-1/3 xl:-translate-x-1/4 2xl:bottom-48 2xl:scale-150"
            />
          </div>
        </div>

        <section className="mx-8 flex-1 md:absolute md:mt-10 lg:mx-24 xl:ml-36 2xl:mt-32">
          <div className="flex flex-col items-center gap-8 text-center md:w-2/3 md:items-start md:gap-12 md:text-left lg:gap-16 xl:w-3/4 2xl:gap-28">
            <h2 className="text-4xl font-bold md:text-6xl 2xl:text-8xl">
              Nice to{isTablet && !isDesktop && <br />} meet you! I&apos;m{" "}
              <span className="border-b-2 border-skin-accent">Adam Keyes</span>.
            </h2>
            <p className="text-skin-variant md:w-11/12 md:text-lg xl:w-2/4 2xl:text-2xl">
              Based in the UK, I&apos;m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <Button type="button" href="#">
              contact me
            </Button>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
