export interface MeasurementProps {
  name: string;
  handleClick?: (name: string) => void;
  measureActive?: string;
}

export interface MeasureInputProps extends MeasurementProps {
  height?: boolean;
  weight?: boolean;
  measureActive?: string;
}
