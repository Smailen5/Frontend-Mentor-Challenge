/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";
import rings from "../assets/images/pattern-rings.svg";
// import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

// Validazione schema da yup
const validationSchema = yup.object({
  name: yup.string().max(15).required(),
  email: yup.string().email().required(),
  message: yup.string().min(50).required(),
});

// Valore iniziale
const initialValue = {
  name: "",
  email: "",
  message: "",
};

const Form = () => {
  // const [input, setInput] = useState({});

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = input;
  //   alert(`You are sending me these data:
  //     name: ${name},
  //     email: ${email},
  //     message: ${message}`);
  //   alert("Thank you for your message!");
  // };

  // const handleChange = (e) => {
  //   setInput((prevInput) => ({
  //     ...prevInput,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <section className="relative bg-neutral-800 px-4 md:grid md:place-items-center md:pb-10 xl:grid-cols-2 xl:items-start xl:pt-24">
      <div className="flex flex-col gap-4 py-12 text-center md:w-1/2 xl:gap-12 xl:pt-0 xl:text-left">
        <h4 className="text-4xl font-bold md:text-7xl xl:text-8xl">Contact</h4>
        <p className="text-lg md:text-xl">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="relative md:w-1/2">
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
              alert(JSON.stringify(values));
            }, 1000);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            isSubmitting,
            isValid,
            dirty,
            touched,
          }) => (
            // console.log(values),
            <form
              onSubmit={handleSubmit}
              id="contact"
              className="relative z-10 flex flex-col gap-8 pb-12"
            >
              <label className="hidden" htmlFor="name">
                name
              </label>
              <div className="grid">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="NAME"
                  onChange={handleChange}
                  value={values.name}
                  className={`${
                    errors.name && touched.name
                      ? "border-red-500"
                      : values.name && !errors.name
                        ? "border-emerald-400"
                        : "border-neutral-400"
                  } border-b-2 bg-transparent pb-4 pl-8 uppercase`}
                />
                {console.log(!errors.message, touched.message)}

                {/* messaggio di errore per nome */}
                {errors.name && touched.name && (
                  <p className="text-right text-red-500">{errors.name}</p>
                )}
              </div>

              <label className="hidden" htmlFor="email">
                name
              </label>
              <div className="grid">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  onChange={handleChange}
                  value={values.email}
                  className={`${
                    errors.email && touched.email
                      ? "border-red-500"
                      : values.email && !errors.email
                        ? "border-emerald-400"
                        : "border-neutral-400"
                  } border-b-2 bg-transparent pb-4 pl-8 uppercase`}
                />
                {/* messaggio di errore per email */}
                {errors.email && touched.email && <p>{errors.email}</p>}
              </div>

              <label className="hidden" htmlFor="message">
                name
              </label>
              <div className="grid">
                <textarea
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                  onChange={handleChange}
                  value={values.message}
                  className={`${
                    errors.message && touched.message
                      ? "border-red-500"
                      : values.message && !errors.message
                        ? "border-emerald-400"
                        : "border-neutral-400"
                  } h-28 resize-none border-b-2 bg-transparent pb-4 pl-8 md:h-36`}
                />
                {/* messaggio di errore per messaggio */}
                {errors.message && touched.message && <p className="text-red-500 text-right">{errors.message}</p>}
              </div>

              <div className="flex justify-end pb-12">
                <Button
                  type="submit"
                  className={`mt-4 ${(!isValid && !dirty) & "text-red-500"}`}
                >
                  {/* TODO: controllare l'operatore && non capisco come sta funzionando */}
                  {/* {console.log((!isValid && !dirty) && 'come')} */}
                  {!isValid && !dirty ? "invalid form" : "send message"}
                </Button>
              </div>
            </form>
          )}
        </Formik>

        <img
          src={rings}
          alt={rings}
          className="absolute -left-72 bottom-36 hidden scale-125 md:-left-full md:bottom-12"
        />
      </div>
      <img
        src={rings}
        alt={rings}
        className="absolute -left-72 bottom-32 scale-125 md:-left-80 md:bottom-16 xl:-left-72 xl:bottom-20"
      />
    </section>
  );
};

export default Form;
