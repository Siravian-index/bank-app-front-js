import z from "zod"


export const registerClientResponse = z.object({
  id: z.string(),
  email: z.string(),
  cc: z.string(),
  rol: z.string(),
  active: z.boolean(),
})


export const registerClientFormSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  cc: z.string({ required_error: "CC is required" }).min(6).max(10).refine(v => !isNaN(Number(v)), { message: "Invalid CC number" }),
  password: z.string({ required_error: "Password is required" }),
})
