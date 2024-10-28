import { z } from "zod";

export const locationRuleRule = z.object({
  name: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  area_id: z
    .number({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
});

export default locationRuleRule;
