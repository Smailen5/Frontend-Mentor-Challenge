/* eslint-disable no-unused-vars */
import React from "react";
import { ContactMe } from "./ContactMe";

const Form = () => {
  return (
    <section className="bg-neutral-800 px-4">
      <div className="flex flex-col gap-4 py-12 text-center">
        <h4 className="text-4xl font-bold">Contact</h4>
        <p className="text-lg">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form className="flex flex-col gap-8 pb-12">
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
          className="border-b-2 border-neutral-400 bg-transparent pb-4 pl-8"
        />
        <div className="flex justify-end">
          <ContactMe>Send message</ContactMe>
        </div>
      </form>
    </section>
  );
};

export default Form;
