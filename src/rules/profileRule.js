import { z } from "zod";
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const sessionRule = z.object({
  email: z.string(),
  username: z.string(),
  password: z
    .string()
    // .optional()
    .refine((val) => val === "" || val.length >= 8, {
      message:
        "La contraseña debe tener al menos 8 caracteres si se proporciona",
    }),
});

export const basicRule = z.object({
  name: z.string().min(1, {
    message: "Este campo es requerido.",
  }),
  last_name: z.string().optional().nullish().nullable(),
  profile_picture: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `El tamaño máximo de archivo es de 5 MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
    .optional(),
});
