export interface MeasurementProps {
  name: string;
  handleClick?: (name: string) => void;
  measureActive?: string;
}

export interface MeasureInputProps extends MeasurementProps {
  measureActive?: string;
}
