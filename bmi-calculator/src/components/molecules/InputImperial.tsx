import { ImperialFieldProps } from "@/types";
import InputLabel from "../atoms/InputLabel";
import InputNumber from "../atoms/InputNumber";

const InputImperial = ({ values, onChange, errors }: ImperialFieldProps) => {
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
            error={errors?.heightFt}
          />
          <InputNumber
            name="heightIn"
            value={values.heightIn}
            onChange={onChange}
            unit="in"
            error={errors?.heightIn}
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
            error={errors?.weightSt}
          />
          <InputNumber
            name="weightLbs"
            value={values.weightLbs}
            onChange={onChange}
            unit="lbs"
            error={errors?.weightLbs}
          />
        </div>
      </div>
    </>
  );
};

export default InputImperial;
