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

  return (
    <section className="relative mt-28 flex h-screen flex-col items-center gap-12 overflow-x-clip">
      {/* immagine profilo e icone */}
      <div className="relative w-full flex-1">
        <img
          src={rings}
          alt="rings icon"
          className="relative -left-60 top-8 -z-20 scale-125"
        />
        {/* immagine profilo con div per centrarla */}
        <div className="flex justify-center">
          <picture className="absolute -top-28 -z-10 size-[11.5rem]">
            <source media="(min-width: 1280px)" srcSet={images.imageProfile.lg} />
            <source media="(min-width: 768px)" srcSet={images.imageProfile.md} />
            <img src={images.imageProfile.sm} alt="image profile" />
          </picture>
        </div>

        <img
          src={circle}
          alt="icon circle"
          className="absolute -right-1/3 bottom-0 -z-10 -translate-x-1/3"
        />
      </div>

      <section className="flex-1">
        <div className="mx-4 flex flex-col items-center gap-8 text-center">
          <h2 className="text-4xl font-bold">
            Nice to meet you! I&apos;m{" "}
            <span className="border-b-2 border-skin-accent">Adam Keyes</span>.
          </h2>
          <p className="text-skin-variant">
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
