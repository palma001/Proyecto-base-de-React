import { z } from "zod";

export const signInRule = z.object({
  username: z.string(),
  password: z.string().min(6, {
    message: "Password must be at least 8 characters",
  }),
});

export const signUpRule = z.object({
  name: z.string().min(1, {
    message: "Este campo es requerido.",
  }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
