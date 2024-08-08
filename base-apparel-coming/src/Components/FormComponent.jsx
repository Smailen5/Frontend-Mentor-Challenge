import { Formik, ErrorMessage, Field, Form } from "formik";
import { object, string } from "yup";

const validationSchema = object({
  email: string().email("Please provide a valid email").required(),
});

const initialValues = {
  email: "",
};

function FormComponent() {
  return (
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
              className="peer relative h-12 w-full rounded-full border border-primary-transparent bg-transparent py-3 pl-6 pr-28 text-neutral outline-none placeholder:text-primary placeholder:opacity-50 invalid:border-secondary focus:invalid:border-2 xl:h-14 xl:pr-40"
            />
            {errors.email && touched.email && (
              <img
                src="/images/icon-error.svg"
                alt="icon error"
                className="absolute right-20 top-1/2 -translate-y-1/2 xl:right-32"
              />
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="peer-valid:hover:bg-gradient-secondary-hover absolute bottom-0 right-0 flex h-full w-16 items-center justify-center rounded-full bg-gradient-secondary text-2xl text-[#fff] shadow-md shadow-primary peer-invalid:cursor-not-allowed xl:w-28"
            >
              <img src="/images/icon-arrow.svg" alt="icon arrow" />
            </button>
            <ErrorMessage
              name="email"
              component="p"
              className="absolute -bottom-8 pl-6 text-secondary"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormComponent;
