/* eslint-disable no-unused-vars */
import Button from "./Button";
import rings from "../assets/images/pattern-rings.svg";
import { Formik } from "formik";
import * as yup from "yup";
import ErrorMessage from "./ErrorMessage";
import Footer from "./Footer";

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
  return (
    <section className="relative mt-14 bg-skin-semiBlack px-4 md:mt-20 md:flex md:flex-col md:items-center md:gap-8 md:px-8">
      <div className="flex flex-col gap-4 py-12 text-center md:w-2/3 md:gap-8 md:pt-16">
        <h4 className="text-4xl font-bold md:text-7xl">Contact</h4>
        <p className="text-sm text-skin-variant md:text-xl">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div className="relative md:w-2/3">
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
          {({ values, errors, handleChange, handleSubmit, touched }) => (
            // console.log(values),
            <form
              onSubmit={handleSubmit}
              id="contact"
              className="relative z-10 flex flex-col gap-8"
            >
              <label className="hidden" htmlFor="name">
                name
              </label>
              <div className="relative grid">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="NAME"
                  onChange={handleChange}
                  value={values.name}
                  className={`${
                    errors.name && touched.name
                      ? "border-skin-error"
                      : values.name && !errors.name
                        ? "border-skin-accent"
                        : "border-skin-base"
                  } border-b-2 bg-transparent pb-4 pl-8 uppercase`}
                />

                {errors.name && touched.name && (
                  <ErrorMessage>{errors.name}</ErrorMessage>
                )}
              </div>

              <label className="hidden" htmlFor="email">
                name
              </label>
              <div className="relative grid">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  onChange={handleChange}
                  value={values.email}
                  className={`${
                    errors.email && touched.email
                      ? "border-skin-error"
                      : values.email && !errors.email
                        ? "border-skin-accent"
                        : "border-skin-base"
                  } border-b-2 bg-transparent pb-4 pl-8 uppercase`}
                />

                {errors.email && touched.email && (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                )}
              </div>

              <label className="hidden" htmlFor="message">
                name
              </label>
              <div className="relative grid">
                <textarea
                  id="message"
                  name="message"
                  placeholder="MESSAGE"
                  onChange={handleChange}
                  value={values.message}
                  className={`${
                    errors.message && touched.message
                      ? "border-skin-error"
                      : values.message && !errors.message
                        ? "border-skin-accent"
                        : "border-skin-base"
                  } h-28 resize-none border-b-2 bg-transparent pb-4 pl-8 md:h-36`}
                />

                {errors.message && touched.message && (
                  <ErrorMessage>{errors.message}</ErrorMessage>
                )}
              </div>

              <div className="flex justify-end pb-16">
                <Button type="submit" className="mt-4">
                  Send message
                </Button>
              </div>
              {/* <hr className="md:hidden block" /> */}
            </form>
          )}
        </Formik>
      </div>
      <img
        src={rings}
        alt={rings}
        className="absolute -left-1/3 bottom-64 -translate-x-1/4 scale-125 md:-left-3/4 md:bottom-36 md:translate-x-1/4 lg:-left-1/4 lg:-translate-x-1/4 xl:-left-1/4 xl:translate-x-1/4"
      />
      {/* <hr className="w-full"/> */}
      <Footer />
    </section>
  );
};

export default Form;
