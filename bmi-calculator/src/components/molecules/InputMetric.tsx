import InputLabel from "../atoms/InputLabel";
import InputNumber from "../atoms/InputNumber";
import InputSpan from "../atoms/InputSpan";

const InputMetric = ({ name }: { name: string }) => {
  return (
    <>
      <div className="space-y-2">
        <InputLabel name={name} />

        <div className="relative">
          <InputNumber name={name} />

          {name === "height" ? (
            <InputSpan unit="cm" />
          ) : (
            <InputSpan unit="kg" />
          )}
        </div>
      </div>
    </>
  );
};

export default InputMetric;
