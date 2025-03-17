import { z } from "zod";

export const paymentMethodRule = z.object({
  name: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  currency_id: z.number().min(1, "Debes seleccionar una moneda"),
  data_fields: z
    .array(
      z.object({
        key: z.string().min(1, "La clave es obligatoria"),
        value: z.string().min(1, "El valor es obligatorio"),
      })
    )
    .min(1, "Debes agregar al menos un parámetro"),
});

export default paymentMethodRule;
