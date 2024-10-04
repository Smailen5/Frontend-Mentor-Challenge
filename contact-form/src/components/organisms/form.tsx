import { ErrorMessage, Field, Form, Formik } from "formik";
import { boolean, object, string } from "yup";
import { Button } from "../atoms/button";
import { Container } from "../atoms/container";
import { Label } from "../atoms/label";
import { Page } from "../molecules/page";

const validationSchema = object({
  name: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  queryType: string()
    .oneOf(["general", "support"], "Seleziona un tipo valido")
    .required(),
  message: string().required(),
  consent: boolean().oneOf([true], "Il consenso è richiesto").required(),
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
  return (
    <Page>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {({ handleSubmit }) => (
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
                  className="bg-input-background md:cursor-pointer flex h-12 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <ErrorMessage
                  id="name-error"
                  name="name"
                  component="p"
                  className="text-red-500"
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
                  className="bg-input-background flex md:cursor-pointer h-12 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <ErrorMessage
                  id="lastName-error"
                  name="lastName"
                  component="p"
                  className="text-red-500"
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
                className="bg-input-background flex md:cursor-pointer h-12 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <ErrorMessage
                id="email-error"
                name="email"
                component="p"
                className="text-red-500"
              />
            </Container>

            {/* Selezione di tipo RADIO */}
            <fieldset>
              <Container variant={"input"}>
                <legend className="text-base font-semibold">
                  Query Type <span>*</span>
                </legend>
                <Container variant={"flex"}>
                  <Container variant={"radio"}>
                    <Field
                      id="general"
                      name="queryType"
                      type="radio"
                      value="general"
                      aria-describedby="queryType-error"
                    />
                    <Label htmlFor="general" className="text-lg md:cursor-pointer">
                      General Enquiry
                    </Label>
                  </Container>

                  <Container variant={"radio"}>
                    <Field
                      id="support"
                      name="queryType"
                      type="radio"
                      value="support"
                      aria-describedby="queryType-error"
                    />
                    <Label htmlFor="support" className="text-lg md:cursor-pointer">
                      Support Request
                    </Label>
                  </Container>
                  <ErrorMessage
                    id="queryType-error"
                    name="queryType"
                    component="p"
                    className="text-red-500"
                  />
                </Container>
              </Container>
            </fieldset>

            {/* Campo di input MESSAGGIO */}
            <Container>
              <Label htmlFor="message">
                Message <span>*</span>
              </Label>
              <Field
                id="message"
                name="message"
                type="text"
                aria-describedby="message-error"
                className="bg-input-background flex h-56 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:h-24"
              />
              <ErrorMessage
                id="message-error"
                name="message"
                component="p"
                className="text-red-500"
              />
            </Container>

            {/* Campo di tipo CHECKBOX */}
            <Container variant={"checkbox"}>
              <Field
                id="consent"
                name="consent"
                type="checkbox"
                aria-describedby="consent-error"
                className="size-5"
              />
              <Label htmlFor="consent" className="text-base leading-6 md:cursor-pointer">
                I consent to being contacted by the team <span>*</span>
              </Label>
              <ErrorMessage
                id="consent-error"
                name="consent"
                component="p"
                className="text-red-500"
              />
            </Container>

            {/* Bottone di tipo SUBMIT */}
            <Button type="submit" size={"full"}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Page>
  );
};
