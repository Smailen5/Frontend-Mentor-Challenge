export interface MeasurementProps {
  name: string;
  measureActive?: string;
}

export interface MeasureRadioProps extends MeasurementProps {
  handleClick?: (name: string) => void;
}
