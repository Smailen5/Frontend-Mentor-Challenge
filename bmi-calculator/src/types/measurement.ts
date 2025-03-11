export interface MeasurementProps {
  name: string;
  onClick?: () => void;
}

export interface MeasureInputProps extends MeasurementProps {
  unit: string;
}
