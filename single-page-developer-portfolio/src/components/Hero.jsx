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
    <section className="relative mt-28">
      {/* immagine profilo e icone */}
      <img
        src={rings}
        alt="rings icon"
        className="absolute -left-60 top-10 -z-20 scale-125"
      />
      {/* immagine profilo con div per centrarla */}
      <div className="flex justify-center">
        <picture className="absolute -top-28 -z-10 size-52">
          <source />
          <img src={images.imageProfile.sm} alt="image profile" />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
