export interface MeasurementProps {
  name?: "metric" | "imperial";
  measureActive: "metric" | "imperial";
}

export interface MeasureRadioProps extends MeasurementProps {
  handleClick?: (value: "metric" | "imperial") => void;
}

export interface FormFieldProps {
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unit: string;
  placeholder?: string;
  error?: string;
}

export interface ImperialFieldProps {
  values: {
    heightFt: string;
    heightIn: string;
    weightSt: string;
    weightLbs: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: Record<string, string>;
}
