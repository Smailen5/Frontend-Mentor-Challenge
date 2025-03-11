import { MeasurementProps } from "@/types";
import { useForm } from "@tanstack/react-form";
// import { zodValidator } from "@tanstack/zod-form-adapter";
import { useState } from "react";
import InputLabel from "../atoms/InputLabel";
import InputImperialSingle from "../molecules/InputImperialSingle";
import InputMetric from "../molecules/InputMetric";
// import { metricSchema } from '@/schemas/bmiSchema';

const Measure = ({ measureActive }: MeasurementProps) => {
  const [bmiResult, setBmiResult] = useState<number | null>(null);

  // Form per unità metriche
  const metricForm = useForm({
    defaultValues: {
      height: 0,
      weight: 0,
    },
    onSubmit: async ({ value }) => {
      // Calcolo BMI metrico
      const height = value.height / 100;
      const bmi = value.weight / (height * height);
      setBmiResult(parseFloat(bmi.toFixed(1)));
    },
  });

  // Form per unità imperiali
  const imperialForm = useForm({
    defaultValues: {
      heightFt: 0,
      heightIn: 0,
      weightSt: 0,
      weightLbs: 0,
    },
    onSubmit: async ({ value }) => {
      // Calcolo BMI imperiale
      const heightInches = value.heightFt * 12 + value.heightIn;
      const weightLbs = value.weightSt * 14 + value.weightLbs;
      const bmi = (weightLbs * 703) / (heightInches * heightInches);
      setBmiResult(parseFloat(bmi.toFixed(1)));
    },
  });

  return (
    <div className="space-y-2">
      {measureActive === "metric" ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              metricForm.handleSubmit();
            }}
          >
            <metricForm.Field
              name="height"
              children={(field) => (
                <InputMetric name={"height"} fieldApi={field} />
              )}
            />
            <metricForm.Field
              name="weight"
              children={(field) => (
                <InputMetric name={"weight"} fieldApi={field} />
              )}
            />
            <metricForm.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button type="submit" disabled={!canSubmit}>
                  {isSubmitting ? "Calcolo..." : "Calcola BMi"}
                </button>
              )}
            />
          </form>
        </>
      ) : (
        <>
          {/* imperial double input */}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              imperialForm.handleSubmit();
            }}
          >
            {/* height section */}
            <div className="space-y-2">
              <InputLabel name="height" />
              <div className="flex gap-4">
                <imperialForm.Field
                  name="heightFt"
                  children={(field) => (
                    <InputImperialSingle
                      name="heightFt"
                      fieldApi={field}
                      unit="ft"
                    />
                  )}
                />
                <imperialForm.Field
                  name="weightSt"
                  children={(field) => (
                    <InputImperialSingle
                      name="heightIn"
                      fieldApi={field}
                      unit="in"
                    />
                  )}
                />
              </div>

              {/* weight section */}
              <InputLabel name="weight" />
              <div className="flex gap-4">
                <imperialForm.Field
                  name="weightSt"
                  children={(field) => (
                    <InputImperialSingle
                      name="weightSt"
                      fieldApi={field}
                      unit="st"
                    />
                  )}
                />
                <imperialForm.Field
                  name="weightSt"
                  children={(field) => (
                    <InputImperialSingle
                      name="weightLbs"
                      fieldApi={field}
                      unit="lbs"
                    />
                  )}
                />
              </div>
            </div>
          </form>
        </>
      )}
      {bmiResult && (
        <div>
          <p>Il tuo BMI è {bmiResult}</p>
        </div>
      )}
    </div>
  );
};

export default Measure;
