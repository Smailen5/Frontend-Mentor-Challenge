import { FormFieldProps } from "@/types";
import InputLabel from "../atoms/InputLabel";
import InputNumber from "../atoms/InputNumber";

const InputMetric = ({ name, value, onChange, error }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <InputLabel name={name} />
      <InputNumber
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        unit="cm"
      />
    </div>
  );
};

export default InputMetric;
