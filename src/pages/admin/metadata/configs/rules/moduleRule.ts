import * as z from "zod";

const moduleRule = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  permissions: z.array(z.string()).optional(),
});

export default moduleRule;
