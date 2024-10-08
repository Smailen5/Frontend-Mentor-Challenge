import { ErrorMessage, Field, Form, Formik } from "formik";
import { boolean, object, string } from "yup";
import { Button } from "../atoms/button";
import { Container } from "../atoms/container";
import { Label } from "../atoms/label";
import { Page } from "../molecules/page";
import { Circle } from "../atoms/circle";
import { Square } from "../atoms/square";
import { useState } from "react";

const validationSchema = object({
  name: string().required("This field is required"),
  lastName: string().required("This field is required"),
  email: string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  queryType: string()
    .oneOf(["general", "support"], "Please a select valid query type")
    .required("Please select a query type"),
  message: string().required("This field is required"),
  consent: boolean()
    .oneOf([true], "To submit this form, please consent to being contacted")
    .required(),
});

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  consent: false,
};

export const FormPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <>
      <Page isSubmitted={formSubmitted}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(value, { resetForm }) => {
            console.log(value);
            setFormSubmitted(true);
            resetForm();
            setTimeout(() => setFormSubmitted(false), 3000);
          }}
        >
          {({ handleSubmit, setFieldValue, values, errors, touched }) => (
            <Form onSubmit={handleSubmit} noValidate>
              <Container variant={"flex"}>
                {/* Campo di input NOME */}
                <Container>
                  <Label htmlFor="name">
                    First Name <span>*</span>
                  </Label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="given-name"
                    aria-describedby="name-error"
                    required
                    className={`flex h-12 w-full rounded-md border border-input ${errors.name && touched.name && "border-destructive"} bg-input-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:cursor-pointer`}
                  />
                  <ErrorMessage
                    id="name-error"
                    name="name"
                    component="p"
                    className="text-destructive"
                  />
                </Container>

                {/* Campo di input COGNOME */}
                <Container>
                  <Label htmlFor="lastName">
                    Last Name <span>*</span>
                  </Label>
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    aria-describedby="lastName-error"
                    required
                    className={`flex h-12 w-full rounded-md border border-input ${errors.lastName && touched.lastName && "border-destructive"} bg-input-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:cursor-pointer`}
                  />
                  <ErrorMessage
                    id="lastName-error"
                    name="lastName"
                    component="p"
                    className="text-destructive"
                  />
                </Container>
              </Container>

              {/* Campo di input EMAIL */}
              <Container>
                <Label htmlFor="email">
                  Email Address <span>*</span>
                </Label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  aria-describedby="email-error"
                  required
                  className={`flex h-12 w-full rounded-md border border-input ${errors.email && touched.email && "border-destructive"} bg-input-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:cursor-pointer`}
                />
                <ErrorMessage
                  id="email-error"
                  name="email"
                  component="p"
                  className="text-destructive"
                />
              </Container>

              {/* Selezione di tipo RADIO */}
              <fieldset>
                <Container variant={"input"}>
                  <legend className="text-base font-semibold">
                    Query Type <span>*</span>
                  </legend>
                  <Container variant={"flex"}>
                    <Button
                      variant={"outline"}
                      size={"lg"}
                      type="button"
                      value={"general"}
                      // Cambia lo stato direttamente in formik
                      onClick={() => setFieldValue("queryType", "general")}
                      className={`${values.queryType === "general" && "bg-background"}`}
                    >
                      <Circle active={values.queryType === "general"} />
                      <Field
                        id="general"
                        name="queryType"
                        type="radio"
                        value="general"
                        aria-describedby="queryType-error"
                        className="sr-only"
                      />
                      <Label
                        htmlFor="general"
                        className="cursor-pointer text-lg"
                      >
                        General Enquiry
                      </Label>
                    </Button>

                    <Button
                      variant={"outline"}
                      size={"lg"}
                      type="button"
                      value={"support"}
                      onClick={() => setFieldValue("queryType", "support")}
                      className={`${values.queryType === "support" && "bg-background"}`}
                    >
                      <Circle active={values.queryType === "support"} />
                      <Field
                        id="support"
                        name="queryType"
                        type="radio"
                        value="support"
                        aria-describedby="queryType-error"
                        className="sr-only"
                      />
                      <Label
                        htmlFor="support"
                        className="cursor-pointer text-lg"
                      >
                        Support Request
                      </Label>
                    </Button>
                  </Container>
                  <ErrorMessage
                    id="queryType-error"
                    name="queryType"
                    component="p"
                    className="text-destructive"
                  />
                </Container>
              </fieldset>

              {/* Campo di input MESSAGGIO */}
              <Container>
                <Label htmlFor="message">
                  Message <span>*</span>
                </Label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  aria-describedby="message-error"
                  autoComplete="off"
                  className={`flex h-56 w-full resize-none rounded-md border border-input ${errors.message && touched.message && "border-destructive"} bg-input-background px-6 py-2 text-sm font-semibold leading-6 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:h-24`}
                />
                <ErrorMessage
                  id="message-error"
                  name="message"
                  component="p"
                  className="text-destructive"
                />
              </Container>

              {/* Campo di tipo CHECKBOX */}
              <div className="pb-8 pt-4">
                <Container variant={"checkbox"}>
                  <Field
                    id="consent"
                    name="consent"
                    type="checkbox"
                    aria-describedby="consent-error"
                    className="sr-only"
                  />
                  <Square
                    active={values.consent}
                    setFieldValues={setFieldValue}
                    consent={values.consent}
                  />
                  <Label
                    htmlFor="consent"
                    className="text-base leading-6 peer-focus-visible:ring-2 peer-focus-visible:ring-primary peer-focus-visible:ring-offset-2 md:cursor-pointer"
                  >
                    I consent to being contacted by the team <span>*</span>
                  </Label>
                </Container>
                <ErrorMessage
                  id="consent-error"
                  name="consent"
                  component="p"
                  className="text-destructive"
                />
              </div>

              {/* Bottone di tipo SUBMIT */}
              <Button type="submit" size={"full"}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Page>
    </>
  );
};
