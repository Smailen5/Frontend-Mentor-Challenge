import { ImperialFieldProps } from "@/types";
import InputLabel from "../atoms/InputLabel";
import InputNumber from "../atoms/InputNumber";

const InputImperial = ({ values, onChange }: ImperialFieldProps) => {
  return (
    <>
      <div className="space-y-2">
        <InputLabel name="height" />
        <div className="flex gap-4">
          <InputNumber
            name="heightFt"
            value={values.heightFt}
            onChange={onChange}
            unit="ft"
          />
          <InputNumber
            name="heightIn"
            value={values.heightIn}
            onChange={onChange}
            unit="in"
          />
        </div>
      </div>

      <div className="space-y-2">
        <InputLabel name="weight" />
        <div className="flex gap-4">
          <InputNumber
            name="weightSt"
            value={values.weightSt}
            onChange={onChange}
            unit="st"
          />
          <InputNumber
            name="weightLbs"
            value={values.weightLbs}
            onChange={onChange}
            unit="lbs"
          />
        </div>
      </div>
    </>
  );
};

export default InputImperial;
