import z from "zod"


// export const registerClientResponse = z.object({
//   id: z.string(),
//   email: z.string(),
//   cc: z.string(),
//   rol: z.string(),
//   active: z.boolean(),
// })


export const accountFormSchema = z.object({
  recipientAccountId: z.string({ required_error: "recipientAccountId is required" }),
  amount: z.string({ required_error: "Amount is required" }).min(4, { message: "Min amount is 1.000" }).refine(v => !isNaN(Number(v)), { message: "Amount must be a number" }),
  type: z.string({ required_error: "type is required" }).min(1),
})
