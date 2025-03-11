import { type FieldApi } from "@tanstack/react-form";

export interface MeasurementProps {
  name?: "metric" | "imperial";
  measureActive: "metric" | "imperial";
}

export interface MeasureRadioProps extends MeasurementProps {
  handleClick?: (value: "metric" | "imperial") => void;
}

export interface FormFieldProps {
  name: string;
  fieldApi: FieldApi<any, any, any>;
  unit?: string;
  placeholder?: string;
}
