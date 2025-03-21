import { z } from "zod";

export const rolRule = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  permissions: z.string().min(1, { message: "El permisos son obligatorios" }),
});

export default rolRule;
