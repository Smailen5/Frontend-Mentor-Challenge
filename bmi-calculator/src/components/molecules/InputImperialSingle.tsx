import { ImperialFieldProps } from "@/types";
import InputNumber from "../atoms/InputNumber";
import InputSpan from "../atoms/InputSpan";

const InputImperialSingle = ({ name, fieldApi, unit }: ImperialFieldProps) => {
  return (
    <div className="relative">
      <InputNumber name={name} fieldApi={fieldApi} />
      <InputSpan unit={unit} />
    </div>
  );
};

export default InputImperialSingle;
