import { FormFieldProps } from "@/types";

const InputNumber = ({ name, fieldApi, placeholder = "0" }: FormFieldProps) => {


  return (
    <div>
      <input
        type="number"
        id={name}
        placeholder={placeholder}
        value={fieldApi.state.value ?? ""}
        onChange={(e) => fieldApi.handleChange(Number(e.target.value))}
        className="text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16"
      />
      {fieldApi.state.meta.isTouched ? (
        <span>{fieldApi.state.meta.errors}</span>
      ) : null}
    </div>
  );
};

export default InputNumber;
