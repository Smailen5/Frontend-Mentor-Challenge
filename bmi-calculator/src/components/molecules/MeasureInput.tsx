import { MeasureInputProps } from "@/types";

const MeasureInput = ({ name, measureActive }: MeasureInputProps) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor="height"
        className="text-preset-7-regular block capitalize"
      >
        {name}
      </label>

      <div className="relative">
        <input
          type="number"
          id="height"
          placeholder="0"
          className="text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16"
        />

        {name === "height" ? (
          <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
            {measureActive === "metric" ? "cm" : "ft"}
          </span>
        ) : (
          <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
            {measureActive === "metric" ? "kg" : "lb"}
          </span>
        )}
      </div>
    </div>
  );
};

export default MeasureInput;
