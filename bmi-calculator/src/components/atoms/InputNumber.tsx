import { FormFieldProps } from "@/types";
import InputSpan from "./InputSpan";

const InputNumber = ({
  name,
  value,
  onChange,
  placeholder = "0",
  unit,
  error,
}: FormFieldProps) => {
  return (
    <div>
      <div className="relative">
        <input
          type="number"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16 text-blue-900 xl:p-4 xl:px-6 xl:pr-16 focus-visible:outline-blue-500 ${
            error ? "border-error" : ""
          }`}
        />
        <InputSpan unit={unit} />
      </div>
      {error && <p className="mt-1 text-sm text-error">{error}</p>}
    </div>
  );
};

export default InputNumber;
