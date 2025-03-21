import { z } from "zod";

export const clientRule = z.object({
  email: z.string().email({ message: "Correo Electrónico no válido" }),
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  phone_number: z.string().min(1, { message: "El teléfono es obligatorio" }),
  address: z.string().min(1, { message: "La dirección es obligatoria" }),
  document_number: z.string().min(1, { message: "El documento es obligatorio" }),
  company: z.string().min(1, { message: "La empresa es obligatoria" }),
});

export default clientRule;
