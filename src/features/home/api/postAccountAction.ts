import { axios } from "../../../lib/axios";




export const postAccountAction = ({ amount, recipientAccountId, type }: { amount: number, recipientAccountId: string, type: string }) => axios.post(`/api/v1/account/${type}`, { amount, ...type === "TRANSFER" && { recipientAccountId } })