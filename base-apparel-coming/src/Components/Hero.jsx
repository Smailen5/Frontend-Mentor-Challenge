import LogoBrand from "./LogoBrand";
import PictureGirl from "./PictureGirl";
import FormComponent from "./FormComponent";
import pattern from "../assets/bg-pattern-desktop.svg";

const Hero = () => {
  return (
    <>
      <LogoBrand />
      <section className="h-ful w-full bg-gradient-primary sm:h-auto xl:flex xl:flex-row-reverse">
        <PictureGirl />

        <div className="relative z-0 xl:flex xl:w-full xl:flex-col">
          <img
            src={pattern}
            alt="pattern hills"
            className="absolute left-0 top-0 -z-10 hidden h-full w-full xl:block"
          />
          <LogoBrand className="hidden xl:block" classImg="scale-125" />
          <div className="flex items-center justify-center px-8 pb-20 pt-16 sm:px-0 xl:h-full xl:px-0 xl:py-10">
            <section className="mx-auto flex h-80 flex-col justify-between text-center sm:w-6/12 xl:h-[25rem] xl:w-[28rem] xl:text-left">
              <h2 className="text-4.5xl font-light uppercase tracking-6 text-primary sm:px-8 xl:px-0 xl:text-6xl">
                we&apos;re{" "}
                <span className="font-semibold text-neutral">coming soon</span>
              </h2>
              <p className="text-sm text-primary xl:text-base">
                Hello fellow shoppers! We&apos;re currently building our new
                fashion store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>

              <FormComponent />
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
