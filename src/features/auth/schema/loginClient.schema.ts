import z from "zod"


export const loginClientResponse = z.object({
  data: z.object({
    user: z.object({
      id: z.string(),
      email: z.string(),
      cc: z.string(),
      rol: z.string(),
      active: z.boolean(),
    }),
    token: z.string(),
  })
})


export const loginClientFormSchema = z.object({
  email: z.string({ required_error: "Email is required" }).email(),
  password: z.string({ required_error: "Password is required" }).min(6, { message: "At least 6 characters password is required" }),
})


export type loginClientResponseType = z.infer<typeof loginClientResponse>;

export type loginClientFormSchema = z.infer<typeof loginClientFormSchema>;

