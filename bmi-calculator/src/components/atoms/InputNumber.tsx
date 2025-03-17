import { FormFieldProps } from "@/types";
import InputSpan from "./InputSpan";

const InputNumber = ({
  name,
  value,
  onChange,
  placeholder = "0",
  unit,
}: FormFieldProps) => {
  return (
    <div className="relative">
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16"
      />
      <InputSpan unit={unit} />
    </div>
  );
};

export default InputNumber;
