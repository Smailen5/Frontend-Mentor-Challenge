/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";
import Footer from "./Footer";
import rings from "../assets/images/pattern-rings.svg";

const Form = () => {
  return (
    <section className="bg-neutral-800 px-4 md:grid md:place-items-center">
      <div className="flex flex-col gap-4 py-12 text-center md:w-1/2">
        <h4 className="text-4xl font-bold md:text-7xl">Contact</h4>
        <p className="text-lg md:text-xl">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="relative md:w-1/2">
        <form className="flex flex-col gap-8 pb-12 z-10 relative">
          <label className="hidden" htmlFor="name">
            name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="NAME"
            className="border-b-2 border-neutral-400 bg-transparent pb-4 pl-8"
          />

          <label className="hidden" htmlFor="email">
            name
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="EMAIL"
            className="border-b-2 border-neutral-400 bg-transparent pb-4 pl-8"
          />

          <label className="hidden" htmlFor="message">
            name
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="MESSAGE"
            className="border-b-2 border-neutral-400 bg-transparent pb-4 pl-8 resize-none"
          />
          <div className="flex justify-end pb-12">
            <Button type="submit" classButton={"mt-4"}>Send message</Button>
          </div>
        </form>
        <img
          src={rings}
          alt={rings}
          className="absolute -left-72 bottom-36 scale-125 md:-left-full md:bottom-12"
        />
      </div>
      {/* <hr className="border-neutral-400" />
      <Footer /> */}
    </section>
  );
};

export default Form;
