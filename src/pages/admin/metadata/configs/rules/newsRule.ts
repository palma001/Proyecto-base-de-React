import { z } from "zod";

const MAX_FILE_SIZE = 500000;

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const eventRule = z.object({
  title: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  body: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  author: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .optional(),
  sub_title: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  published_at: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(10, {
      message: "EL campo es requerido.",
    }),
  status: z
    .string({
      required_error: "EL campo es requerido.",
    })
    .min(1, {
      message: "EL campo es requerido.",
    }),
  is_featured: z.number({
    required_error: "EL campo es requerido.",
  }),
  image: z
    .any()
    .refine((files) => {
      return files[0]?.size <= MAX_FILE_SIZE;
    }, `El tamaño máximo de archivo es de 5 MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    )
    .nullable()
    .nullish()
    .optional(),
});

export default eventRule;
