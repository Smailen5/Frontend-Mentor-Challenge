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
  // @ts-expect-error - Tanstack Form richiede 19 parametri di tipo
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldApi: FieldApi<any, any, any>;
  unit?: string;
  placeholder?: string;
}

export interface ImperialFieldProps {
  name: string;
  // @ts-expect-error - Tanstack Form richiede 19 parametri di tipo
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldApi: FieldApi<any, any, any>;
  unit: string;
}
