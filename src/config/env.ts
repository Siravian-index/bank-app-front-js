import { schema } from "./env.schema";

export const env = schema.parse(import.meta.env)

