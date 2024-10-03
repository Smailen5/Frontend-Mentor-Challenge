import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string, boolean } from "yup";
import { Button } from "../atoms/button";
import { ContainerInput } from "../atoms/containerInput";
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
  consent: true, // ricordati di cambiarlo in false, serve solo per i test
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
            {/* Campo di input NOME */}
            <Label htmlFor="name">First Name *</Label>
            <Field
              id="name"
              name="name"
              type="text"
              autoComplete="given-name"
              aria-describedby="name-error"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <ErrorMessage
              id="name-error"
              name="name"
              component="p"
              className="text-red-500"
            />

            {/* Campo di input COGNOME */}
            <Label htmlFor="lastName">Last Name *</Label>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              aria-describedby="lastName-error"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <ErrorMessage
              id="lastName-error"
              name="lastName"
              component="p"
              className="text-red-500"
            />

            {/* Campo di input EMAIL */}
            <Label htmlFor="email">Email Address *</Label>
            <Field
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              aria-describedby="email-error"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <ErrorMessage
              id="email-error"
              name="email"
              component="p"
              className="text-red-500"
            />

            {/* Selezione di tipo RADIO */}
            <fieldset>
              <legend>Query Type *</legend>
              <ContainerInput>
                <Field
                  id="general"
                  name="queryType"
                  type="radio"
                  value="general"
                  aria-describedby="queryType-error"
                />
                <Label htmlFor="general">General Enquiry</Label>
              </ContainerInput>

              <ContainerInput>
                <Field
                  id="support"
                  name="queryType"
                  type="radio"
                  value="support"
                  aria-describedby="queryType-error"
                />
                <Label htmlFor="support">Support Request</Label>
              </ContainerInput>
              <ErrorMessage
                id="queryType-error"
                name="queryType"
                component="p"
                className="text-red-500"
              />
            </fieldset>

            {/* Campo di input MESSAGGIO */}
            <Label htmlFor="message">Message *</Label>
            <Field
              id="message"
              name="message"
              type="text"
              aria-describedby="message-error"
            />
            <ErrorMessage
              id="message-error"
              name="message"
              component="p"
              className="text-red-500"
            />

            {/* Campo di tipo CHECKBOX */}
            <input
              id="consent"
              name="consent"
              type="checkbox"
              aria-describedby="consent-error"
            />
            <Label htmlFor="consent">
              I consent to being contacted by the team *
            </Label>
            <ErrorMessage
              id="consent-error"
              name="consent"
              component="p"
              className="text-red-500"
            />

            {/* Bottone di tipo SUBMIT */}
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Page>
  );
};
