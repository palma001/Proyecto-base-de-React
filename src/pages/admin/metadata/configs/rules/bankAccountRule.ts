import { z } from "zod";

export const bankAccountRule = z.object({
  company: z.string().min(1, { message: "La empresa es obligatoria" }),
  bank: z.string().min(1, { message: "El banco es obligatorio" }),
  account_number: z.string().min(1, { message: "El numero de cuenta es obligatorio" }),
  account_type: z.string().min(1, { message: "El tipo de cuenta es obligatorio" }),
});

export default bankAccountRule;
