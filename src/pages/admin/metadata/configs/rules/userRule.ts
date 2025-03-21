import { z } from "zod";

export const userRule = z.object({
  email: z.string().email({ message: "Correo Electrónico no válido" }),
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
  username: z.string().min(1, { message: "El nombre de usuario es obligatorio" }),
  phone_number: z.string().min(1, { message: "El teléfono es obligatorio" }),
  address: z.string().min(1, { message: "La dirección es obligatoria" }),
  document_number: z.string().min(1, { message: "El documento es obligatorio" }),
});

export default userRule;
