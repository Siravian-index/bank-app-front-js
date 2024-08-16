import z from "zod"

export const authUserSchema = z.object({
  id: z.string(),
  email: z.string(),
  cc: z.string(),
  rol: z.string(),
  active: z.boolean(),
})