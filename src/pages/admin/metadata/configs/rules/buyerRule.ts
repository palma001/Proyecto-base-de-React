import { z } from "zod";

export const buyerRule = z.object({
  email: z.string().email({ message: "Correo Electrónico no válido" }),
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  phone_number: z.string().min(1, { message: "El teléfono es obligatorio" }),
  document_number: z.string().min(1, { message: "El documento es obligatorio" }),
  observations: z.string().min(1, { message: "Las observaciones son obligatorias" }),
  company: z.string().min(1, { message: "La empresa es obligatoria" }),
});

export default buyerRule;
