import { FormFieldProps } from "@/types";

const InputNumber = ({
  name,
  value,
  onChange,
  error,
  placeholder = "0",
}: FormFieldProps) => {
  return (
    <div>
      <input
        type="number"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16"
      />
      {error && (
        <span className="mt-1 block text-xs text-red-500">{error}</span>
      )}
    </div>
  );
};

export default InputNumber;
