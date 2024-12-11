import { z } from 'zod'

export const authRule = z.object({
  email: z.string()
    .email({ message: 'Correo Electrónico no válido' }),
  password: z.string()
    .min(1, { message: 'La contrasaña es obligatoria' })
})

export const forgotPasswordRule = z.object({
  email: z.string()
    .email({ message: 'Correo Electrónico no válido' }),
})
