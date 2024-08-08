function PictureGirl() {
    return (
      <picture className="flex-shrink-0">
        <source media="(min-width: 1280px)" srcSet="/images/hero-desktop.jpg" />
        <img
          src="/images/hero-mobile.jpg"
          alt="hero"
          className="w-full xl:h-full"
        />
      </picture>
    );
  }

  export default PictureGirl