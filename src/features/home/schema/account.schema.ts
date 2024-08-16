import z from "zod"


export const accountSchemaResponse = z.object({
  id: z.string(),
  clientId: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  balance: z.number(),
})
