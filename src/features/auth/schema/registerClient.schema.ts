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
  cc: z.string({ required_error: "CC is required" }).min(10, { message: "CC is required" }).max(10, { message: "CC is required" }).refine(v => !isNaN(Number(v)), { message: "Invalid CC number" }),
  password: z.string({ required_error: "Password is required" }).min(6, { message: "At least 6 characters password is required" }),
})
