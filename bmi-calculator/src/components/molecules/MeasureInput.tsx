import { MeasurementProps } from "@/types";

const MeasureInput = ({ name, measureActive }: MeasurementProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-preset-7-regular block capitalize">
        {name}
      </label>

      {measureActive === "metric" ? (
        <div className="relative">
          <input
            type="number"
            id={name}
            placeholder="0"
            className="text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16"
          />

          {name === "height" ? (
            <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
              cm
            </span>
          ) : (
            <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
              kg
            </span>
          )}
        </div>
      ) : (
        <>
          {/* imperial */}
          <div className="flex gap-4">
            <div className="relative">
              <input
                type="number"
                id={name}
                placeholder="0"
                className="text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16"
              />

              {name === "height" ? (
                <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
                  ft
                </span>
              ) : (
                <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
                  st
                </span>
              )}
            </div>
            
            <div className="relative">
              <input
                type="number"
                id={name}
                placeholder="0"
                className="text-preset-4 placeholder:text-grey-500 container rounded-xl border p-6 pr-16"
              />

              {name === "height" ? (
                <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
                  in
                </span>
              ) : (
                <span className="text-preset-4 absolute top-1/2 right-6 -translate-y-1/2 text-blue-500">
                  lbs
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MeasureInput;
