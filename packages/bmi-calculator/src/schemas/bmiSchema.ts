import { z } from "zod";

export const metricSchema = z.object({
  height: z
    .number()
    .min(50, "Height must be at least 50 cm")
    .max(500, "Height cannot exceed 500 cm"),
  weight: z
    .number()
    .min(20, "Weight must be at least 20 kg")
    .max(500, "Weight cannot exceed 500 kg"),
});

export const imperialSchema = z.object({
  heightFt: z
    .number()
    .min(1, "Height must be at least 1 foot")
    .max(10, "Height cannot exceed 10 ft"),
  heightIn: z
    .number()
    .min(0, "Height must be at least 0 inches")
    .max(12, "Height cannot exceed 12 in"),
  weightSt: z
    .number()
    .min(1, "Weight must be at least 1 stone")
    .max(500, "Weight cannot exceed 500 st"),
  weightLbs: z
    .number()
    .min(0, "Weight must be at least 0 pounds")
    .max(1000, "Weight cannot exceed 1000 lbs"),
});

export type MetricForm = z.infer<typeof metricSchema>;
export type ImperialForm = z.infer<typeof imperialSchema>;
