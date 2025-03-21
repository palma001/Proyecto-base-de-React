import { z } from "zod";

export const companyRule = z.object({
  name: z.string().min(1, { message: "El nombre es obligatorio" }),
  rif_number: z.string().min(1, { message: "El RIF es obligatorio" }),
  phone_number: z.string().min(1, { message: "El teléfono es obligatorio" }),
  email: z.string().email({ message: "Correo Electrónico no válido" }),
  address: z.string().min(1, { message: "La dirección es obligatoria" }),
  document_number: z.string().min(1, { message: "El documento es obligatorio" }),
  legalAgent: z.string().min(1, { message: "El representante legal es obligatorio" }),
  logo: z.string().min(1, { message: "El logo es obligatorio" }),
  stamp: z.string().min(1, { message: "El sello es obligatorio" }),
});

export default companyRule;
