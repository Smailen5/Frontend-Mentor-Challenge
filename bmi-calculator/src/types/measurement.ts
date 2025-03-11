import { type FieldApi } from "@tanstack/react-form";
import { Dispatch, SetStateAction } from "react";

export interface MeasurementProps {
  name?: string;
  measureActive: "metric" | "imperial";
}

export interface MeasureRadioProps extends MeasurementProps {
  handleClick?: Dispatch<SetStateAction<"metric" | "imperial">>;
}

export interface FormFieldProps {
  name: string;
  fieldApi: FieldApi<any, any, any>;
  unit?: string;
  placeholder?: string;
}
