import { z } from 'zod'

export const authRule = z.object({
  email: z.string()
    .email({ message: 'Correo Electrónico no válido' }),
  password: z.string()
    .min(1, { message: 'La contrasaña es obligatoria' })
})

export const registerRule = z.object({
  name: z.string()
    .min(1, { message: 'El nombre es obligatorio' }),
  lastname: z.string()
    .min(1, { message: 'El apellido es obligatorio' }),
  email: z.string()
    .email({ message: 'Correo Electrónico no válido' }),
  username: z.string()
    .min(1, { message: 'El nombre de usuario es obligatorio' }),
  phone: z.string()
    .min(1, { message: 'El teléfono es obligatorio' }),
  address: z.string()
    .min(1, { message: 'La dirección es obligatoria' }),
  password: z.string()
    .min(1, { message: 'La contrasaña es obligatoria' }),
  confirmPassword: z.string()
    .min(1, { message: 'La contraseña de confirmación es obligatoria' }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"], // Path where the error message should appear
})

export const forgotPasswordRule = z.object({
  email: z.string()
    .email({ message: 'Correo Electrónico no válido' }),
})
