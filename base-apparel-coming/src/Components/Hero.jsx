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

      <div className="flex items-center justify-center bg-gradient-primary pb-24 pt-14">
        <section className="h-[310px] w-6/12 text-center">
          <h2 className="uppercase text-primary font-light text-4.5xl">
            we&apos;re <span className="text-neutral">coming soon</span>
          </h2>
          <p>
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </section>
      </div>
    </section>
  );
};

export default Hero;
