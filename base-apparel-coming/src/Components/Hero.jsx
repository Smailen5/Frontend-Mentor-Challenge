/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { twMerge } from "tailwind-merge";
import LogoBrand from "./LogoBrand";
import PictureGirl from "./PictureGirl";

const Hero = () => {
  return (
    <>
      <LogoBrand />
      <section className="w-full bg-gradient-primary xl:flex xl:h-screen xl:flex-row-reverse">
        <PictureGirl />

        <div className="xl:flex xl:w-full xl:flex-col">
          <LogoBrand className="hidden xl:block" classImg="scale-125" />
          {/* <Header className="mx-auto w-6/12 scale-125 px-0 xl:block" /> */}
          <div className="flex items-center justify-center px-8 pb-24 pt-14 sm:px-0 xl:h-full xl:px-0 xl:py-10">
            <section className="mx-auto flex h-72 flex-col justify-between text-center sm:w-6/12 xl:h-[25rem] xl:w-[28rem] xl:text-left">
              <h2 className="text-4.5xl font-light uppercase tracking-6 text-primary sm:px-8 xl:px-0 xl:text-6xl">
                we&apos;re{" "}
                <span className="font-semibold text-neutral">coming soon</span>
              </h2>
              <p className="text-sm text-primary xl:text-base">
                Hello fellow shoppers! We&apos;re currently building our new
                fashion store. Add your email below to stay up-to-date with
                announcements and our launch deals.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
