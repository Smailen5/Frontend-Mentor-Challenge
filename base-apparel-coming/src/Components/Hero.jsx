const Hero = () => {
  return (
    <section className="w-full">
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
        <img
          src="/images/hero-mobile.jpg"
          alt="hero"
          className="w-full pt-[5.8rem]"
        />
      </picture>

      <div className="flex items-center justify-center bg-gradient-primary px-8 pb-24 pt-14 sm:px-0">
        <section className="mx-auto flex h-[310px] flex-col justify-between text-center sm:w-6/12">
          <h2 className="text-4.5xl tracking-6 font-light uppercase text-primary sm:px-8">
            we&apos;re{" "}
            <span className="font-semibold text-neutral">coming soon</span>
          </h2>
          <p className="text-sm text-primary">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <form>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                autoComplete="current-email"
                required
                className="bg-white h-12 w-full rounded-full border border-primary-transparent py-3 pl-6 text-primary outline-none placeholder:text-primary placeholder:opacity-50"
              />
              <button
                type="submit"
                className="absolute bottom-0 right-0 top-0 flex h-12 w-16 items-center justify-center rounded-full bg-gradient-secondary text-2xl text-[#fff] shadow-md shadow-primary"
              >
                <img src="/images/icon-arrow.svg" alt="icon arrow" />
              </button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Hero;
