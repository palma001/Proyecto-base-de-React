import { z } from "zod";

export const userRule = z.object({
  email: z.string().email({ message: "Correo Electrónico no válido" }),
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  last_name: z.string().min(1, { message: "El apellido es obligatorio" }),
  username: z
    .string()
    .min(1, { message: "El nombre de usuario es obligatorio" }),
  password: z.string().min(1, { message: "La contraseña es obligatoria" }),
  role_id: z.number().min(1, { message: "Debes seleccionar un rol" }),
});

export default userRule;
