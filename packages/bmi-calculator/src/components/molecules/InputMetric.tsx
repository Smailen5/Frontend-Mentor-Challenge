import { FormFieldProps } from "@/types";
import InputLabel from "../atoms/InputLabel";
import InputNumber from "../atoms/InputNumber";

const InputMetric = ({
  name,
  value,
  onChange,
  unit,
  error,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <InputLabel name={name} />
      <InputNumber
        name={name}
        value={value}
        onChange={onChange}
        unit={unit}
        error={error}
      />
    </div>
  );
};

export default InputMetric;
