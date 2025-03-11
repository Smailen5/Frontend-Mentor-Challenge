import { z } from "zod";

export const metricSchema = z.object({
  height: z
    .number()
    .min(50, "L'altezza deve essere almeno 50 cm")
    .max(500, "L'altezza deve essere al massimo 500 cm"),
  weight: z
    .number()
    .min(20, "Il peso deve essere almeno 20 kg")
    .max(500, "Il peso deve essere al massimo 500 kg"),
});

export const imperialSchema = z.object({
  heightFt: z
    .number()
    .min(1, "L'altezza deve essere almeno 1 piede")
    .max(10, "L'altezza non può superare 10 ft"),
  heightIn: z
    .number()
    .min(0, "L'altezza deve essere almeno 0 pollici")
    .max(12, "L'altezza non può superare 12 in"),
  weightSt: z
    .number()
    .min(1, "Il peso deve essere almeno 1 stone")
    .max(500, "Il peso non può superare 500 st"),
  weightLbs: z
    .number()
    .min(0, "Il peso deve essere almeno 0 libbre")
    .max(1000, "Il peso non può superare 1000 lbs"),
});

export type MetricForm = z.infer<typeof metricSchema>;
export type ImperialForm = z.infer<typeof imperialSchema>;
