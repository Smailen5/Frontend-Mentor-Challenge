const Hero = () => {
  return (
    <section className="w-full">
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
        <img
          src="/images/hero-mobile.jpg"
          alt="hero"
          className="w-full pt-[5.5rem]"
        />
      </picture>
    </section>
  );
};

export default Hero;
