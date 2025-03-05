import { MeasurementProps } from "@/types";

const MeasureInput = ({ name }: MeasurementProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor="height" className="text-preset-7-regular block capitalize">
        {name}
      </label>

      <input
        type="number"
        id="height"
        className="text-preset-5 rounded-xl border py-6"
      />
    </div>
  );
};

export default MeasureInput;
