import imgHeroDesktopPng from "../assets/image-hero-desktop.png";
import imgHeroDesktopWebp from "../assets/image-hero-desktop.webp";
import imgHeroDesktopPng2x from "../assets/image-hero-desktop@2x.png";
import imgHeroDesktopWebp2x from "../assets/image-hero-desktop@2x.webp";
import imgHeroPng from "../assets/image-hero-mobile.png";
import imgHeroWebp from "../assets/image-hero-mobile.webp";
import imgHero2xPng from "../assets/image-hero-mobile@2x.png";
import imgHero2xWebp from "../assets/image-hero-mobile@2x.webp";
import imgHeroTabletPng from "../assets/image-hero-tablet.png";
import imgHeroTabletWebp from "../assets/image-hero-tablet.webp";
import imgHeroTabletPng2x from "../assets/image-hero-tablet@2x.png";
import imgHeroTabletWebp2x from "../assets/image-hero-tablet@2x.webp";

export const HeroImage = () => {
  return (
    <picture className="h-auto w-full md:h-[150%] md:min-w-[150%] md:-translate-y-20 md:translate-x-60 lg:-translate-y-32 lg:translate-x-72 xl:translate-x-96">
      {/* IMMAGINI DESKTOP */}
      <source
        srcSet={`${imgHeroDesktopWebp2x} 2x, ${imgHeroDesktopWebp} 1x}`}
        media="(min-width: 1024px)"
        type="image/webp"
      />
      <source
        srcSet={`${imgHeroDesktopPng2x} 2x, ${imgHeroDesktopPng} 1x`}
        media="(min-width: 1024px)"
        type="image/png"
      />
      {/* IMMAGINI TABLET */}
      <source
        srcSet={`${imgHeroTabletWebp2x} 2x, ${imgHeroTabletWebp} 1x`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${imgHeroTabletPng2x} 2x, ${imgHeroTabletPng} 1x`}
        type="image/png"
        media="(min-width: 768px)"
      />
      {/* IMMAGINI MOBILE */}
      <source
        srcSet={`${imgHero2xWebp} 2x, ${imgHeroWebp} 1x`}
        type="image/webp"
      />
      <source
        srcSet={`${imgHero2xPng} 2x, ${imgHeroPng} 1x`}
        type="image/png"
      />
      <img
        src={imgHeroWebp}
        alt="image hero"
        className="h-auto w-full scale-125 object-cover object-top"
      />
    </picture>
  );
};
