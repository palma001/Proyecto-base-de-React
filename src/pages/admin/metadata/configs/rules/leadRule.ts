import { z } from "zod";

export const leadRule = z.object({
  email: z.string().email({ message: "Correo Electrónico no válido" }),
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
  phone_number: z.string().min(1, { message: "El teléfono es obligatorio" }),
  status: z.string().min(1, { message: "El estado es obligatorio" }),
  country: z.string().min(1, { message: "El país es obligatorio" }),
  description: z.string().min(1, { message: "La descripción es obligatoria" }),
  company_name: z.string().min(1, { message: "La empresa es obligatoria" }),
});

export default leadRule;
