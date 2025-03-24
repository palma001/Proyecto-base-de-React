import { z } from "zod";

export const permissionRule = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
});

export default permissionRule;
