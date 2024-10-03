// import { Form } from "formik";
import { Page } from "../molecules/page";
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { ContainerInput } from "../atoms/containerInput";

export const FormPage = () => {
  return (
    <Page>
      <form>
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
      </form>
    </Page>
  );
};
