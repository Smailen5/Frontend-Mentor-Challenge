import { type ImperialFieldProps } from "@/types";
import InputLabel from "../atoms/InputLabel";
import InputNumber from "../atoms/InputNumber";
import InputSpan from "../atoms/InputSpan";

const InputImperial = ({ name, primaryFieldApi, secondaryFieldApi }: ImperialFieldProps) => {
  return (
    <div className="space-y-2">
      <InputLabel name={name} />

      <div className="flex gap-4">
        <div className="relative">
          <InputNumber name={name} fieldApi={primaryFieldApi} />

          {name === "height" ? (
            <InputSpan unit="ft" />
          ) : (
            <InputSpan unit="st" />
          )}
        </div>

        <div className="relative">
          <InputNumber name={name + "SecondValue"} fieldApi={secondaryFieldApi} />

          {name === "height" ? (
            <InputSpan unit="in" />
          ) : (
            <InputSpan unit="lbs" />
          )}
        </div>
      </div>
    </div>
  );
};

export default InputImperial;
