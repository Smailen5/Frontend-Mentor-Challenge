/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Formik, ErrorMessage, Field, Form } from "formik";
import { object, string } from "yup";
import { twMerge } from "tailwind-merge";
import Header from "./Header";

const validationSchema = object({
  email: string().email("Please provide a valid email").required(),
});

const initialValues = {
  email: "",
};

const Hero = () => {
  return (
    <>
    <Header />
      <section className="w-full bg-gradient-primary xl:flex xl:h-screen xl:flex-row-reverse">
        <picture className="flex-shrink-0">
          <source
            media="(min-width: 1280px)"
            srcSet="/images/hero-desktop.jpg"
          />
          <img
            src="/images/hero-mobile.jpg"
            alt="hero"
            className="w-full xl:h-full"
          />
        </picture>

        <div className="xl:flex xl:w-full xl:flex-col">
          <Header className="hidden xl:block" classImg="scale-125" />
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
                        className="peer h-12 w-full rounded-full border border-primary-transparent bg-transparent py-3 pl-6 pr-16 text-neutral outline-none placeholder:text-primary placeholder:opacity-50 invalid:border-secondary focus:invalid:border-2 xl:h-14"
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
                        className="absolute bottom-0 right-0 top-0 flex h-full w-16 items-center justify-center rounded-full bg-gradient-secondary text-2xl text-[#fff] shadow-md shadow-primary peer-invalid:cursor-not-allowed xl:h-full"
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
    </>
  );
};

export default Hero;
