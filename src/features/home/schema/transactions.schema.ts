import z from "zod"




const transactionSchema = z.object({
  id: z.string(),
  type: z.string(),
  money: z.number(),
  createdAt: z.string(),
  ownerAccountId: z.string(),
  recipientAccountId: z.string().nullable(),

})

export const transactionsSchemaResponse = z.array(transactionSchema)


export type transactionType = z.infer<typeof transactionSchema>;


