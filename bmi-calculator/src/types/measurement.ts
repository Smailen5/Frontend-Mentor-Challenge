import { Dispatch, SetStateAction } from "react";

export interface MeasurementProps {
  name?: string;
  measureActive: "metric" | "imperial";
}

export interface MeasureRadioProps extends MeasurementProps {
  handleClick?: Dispatch<SetStateAction<"metric" | "imperial">>;
}
