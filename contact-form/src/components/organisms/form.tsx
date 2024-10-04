import { ErrorMessage, Field, Form, Formik } from "formik";
import { boolean, object, string } from "yup";
import { Button } from "../atoms/button";
import { Container } from "../atoms/container";
import { Label } from "../atoms/label";
import { Page } from "../molecules/page";
import { Circle } from "../atoms/circle";

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
        {({ handleSubmit, setFieldValue, values }) => (
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
                  className="bg-input-background flex h-12 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:cursor-pointer"
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
                  className="bg-input-background flex h-12 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:cursor-pointer"
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
                className="bg-input-background flex h-12 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:cursor-pointer"
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
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    type="button"
                    value={"general"}
                    // Cambia lo stato direttamente in formik
                    onClick={() => setFieldValue("queryType", "general")}
                    className={`${values.queryType === 'general' && 'bg-background'}`}
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
                    <Label htmlFor="general" className="text-lg cursor-pointer">
                      General Enquiry
                    </Label>
                  </Button>

                  <Button
                    variant={"outline"}
                    size={"lg"}
                    type="button"
                    value={"support"}
                    onClick={() => setFieldValue("queryType", "support")}
                    className={`${values.queryType === 'support' && 'bg-background'}`}
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
                    <Label htmlFor="support" className="text-lg cursor-pointer">
                      Support Request
                    </Label>
                  </Button>
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
                autoComplete="off"
                className="bg-input-background flex h-56 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:h-24"
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
              <Label
                htmlFor="consent"
                className="text-base leading-6 md:cursor-pointer"
              >
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
