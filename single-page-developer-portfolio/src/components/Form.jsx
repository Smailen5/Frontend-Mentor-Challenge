/* eslint-disable no-unused-vars */
import React from "react";

const Form = () => {
  return (
    <section className="bg-neutral-800 px-4">
        <div className='text-center py-8 flex flex-col gap-4'>

      <h4 className="text-3xl font-bold">Contact</h4>
      <p className="text-lg">
        I would love to hear about your project and how I could help. Please
        fill in the form, and I&apos;ll get back to you as soon as possible.
      </p>
        </div>

      <form>
        <label>name</label>
        <input type="text" />

        <label>name</label>
        <input type="text" />

        <label>name</label>
        <input type="text" />
      </form>
    </section>
  );
};

export default Form;
