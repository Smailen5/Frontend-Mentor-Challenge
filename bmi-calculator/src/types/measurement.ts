export interface MeasurementProps {
  name: string;
  handleClick?: (name: string) => void;
}

export interface MeasureInputProps extends MeasurementProps {
  unit: string;
}
