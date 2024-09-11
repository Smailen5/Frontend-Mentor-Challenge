import imgHeroPng from "../assets/image-hero-mobile.png";
import imgHeroWebp from "../assets/image-hero-mobile.webp";
import imgHero2xPng from "../assets/image-hero-mobile@2x.png";
import imgHero2xWebp from "../assets/image-hero-mobile@2x.webp";

export const HeroImage = () => {
  return (
    <picture className="scale-125 mt-10">
      <source
        srcSet={`${imgHero2xWebp} 2x, ${imgHeroWebp} 1x`}
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${imgHero2xPng} 2x, ${imgHeroPng} 1x`}
        type="image/png"
        media="(min-width: 768px)"
      />
      <img src={imgHeroWebp} alt="image hero" />
    </picture>
  );
};
