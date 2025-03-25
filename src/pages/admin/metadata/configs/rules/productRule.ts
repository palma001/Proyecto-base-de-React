import { z } from "zod";

export const productRule = z.object({
  name: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  description: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  url: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  product_id: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  logo: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
});

export default productRule;
