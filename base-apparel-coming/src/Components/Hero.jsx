/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Formik, ErrorMessage, Field, Form } from "formik";
import { object, string } from "yup";
import { twMerge } from "tailwind-merge";
import Header from "./Header";
import { Children } from "react";

const validationSchema = object({
  email: string().email("Please provide a valid email").required(),
});

const initialValues = {
  email: "",
};

const Hero = ({ children }) => {
  return (
    <section className="w-full bg-gradient-primary xl:flex xl:h-screen xl:flex-row-reverse">
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop.jpg" />
        <img src="/images/hero-mobile.jpg" alt="hero" className="w-full" />
      </picture>

      <div>
        {children}
        {/* <Header className="mx-auto w-6/12 scale-125 px-0 xl:block" /> */}
        <div className="flex items-center justify-center px-8 pb-24 pt-14 sm:px-0 xl:px-0">
          <section className="mx-auto flex h-[310px] flex-col justify-between text-center sm:w-6/12 xl:text-left">
            <h2 className="text-4.5xl tracking-6 font-light uppercase text-primary sm:px-8 xl:px-0">
              we&apos;re{" "}
              <span className="font-semibold text-neutral">coming soon</span>
            </h2>
            <p className="text-sm text-primary">
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </p>

            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                setTimeout(() => {
                  setSubmitting(false);
                  alert(JSON.stringify(values));
                }, 300);
              }}
            >
              {({ handleSubmit, isSubmitting, errors, touched }) => (
                <Form onSubmit={handleSubmit} noValidate>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <div className="relative">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="bg-transparent border-primary-transparent peer h-12 w-full rounded-full border py-3 pl-6 pr-16 text-neutral outline-none placeholder:text-primary placeholder:opacity-50 invalid:border-secondary focus:invalid:border-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="mt-1 pl-6 text-left text-secondary"
                    />
                    {errors.email && touched.email && (
                      <img
                        src="/images/icon-error.svg"
                        alt="icon error"
                        className="absolute right-20 top-1/3 -translate-y-1/2"
                      />
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute bottom-0 right-0 top-0 flex h-12 w-16 items-center justify-center rounded-full bg-gradient-secondary text-2xl text-[#fff] shadow-md shadow-primary peer-invalid:cursor-not-allowed"
                    >
                      <img src="/images/icon-arrow.svg" alt="icon arrow" />
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Hero;
