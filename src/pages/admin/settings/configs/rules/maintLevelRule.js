import { z } from "zod";

export const maintLevelRule = z.object({
  name: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  maint_type_id: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
});

export default maintLevelRule;
