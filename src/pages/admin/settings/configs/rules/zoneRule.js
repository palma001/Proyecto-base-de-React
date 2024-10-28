import { z } from "zod";

export const zoneRule = z.object({
  name: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
});

export default zoneRule;