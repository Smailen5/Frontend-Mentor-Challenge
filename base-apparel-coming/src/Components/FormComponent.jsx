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
  );
}

export default FormComponent;
