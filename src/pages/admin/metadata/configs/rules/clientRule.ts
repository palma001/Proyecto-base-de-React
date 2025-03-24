import { z } from "zod";

export const clientRule = z.object({
  email: z.string().email({ message: "Correo Electrónico no válido" }),
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
  phone_number: z.string().min(1, { message: "El teléfono es obligatorio" }),
});

export default clientRule;
