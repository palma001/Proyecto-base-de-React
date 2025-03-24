import { z } from "zod";

export const rolRule = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  acronym: z.string().min(1, { message: "El acrónimo es obligatorio" }),
});

export default rolRule;
