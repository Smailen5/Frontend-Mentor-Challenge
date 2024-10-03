import { Form, Formik } from "formik";
import { ContainerInput } from "../atoms/containerInput";
import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { Page } from "../molecules/page";
import { Button } from "../atoms/button";

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  queryType: "",
  message: "",
  contact: "",
};

export const FormPage = () => {
  return (
    <Page>
      <Formik
        initialValues={initialValues}
        onSubmit={(value) => {
          console.log(value);
        }}
      >
        {() => (
          <Form>
            <Label>First Name *</Label>
            <Input />

            <Label>Last Name *</Label>
            <Input />

            <Label>Email Address *</Label>
            <Input />

            <fieldset>
              <legend>Query Type *</legend>
              <ContainerInput>
                <input type="radio" />
                <Label>General Enquiry</Label>
              </ContainerInput>

              <ContainerInput>
                <input type="radio" />
                <Label>Support Request</Label>
              </ContainerInput>
            </fieldset>

            <Label>Message *</Label>
            <Input type="text" />

            <input type="checkbox" />
            <Label>I consent to being contacted by the team *</Label>

            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Page>
  );
};
