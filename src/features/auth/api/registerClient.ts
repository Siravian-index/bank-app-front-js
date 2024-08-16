import { axios } from "../../../lib/axios";




export const registerClient = (payload: {email: string, cc: string, password: string, rol: string}): Promise<unknown> => axios.post(`/api/v1/register`, payload)
// .then((data) => OpenCaseResponseSchema.parse(data.data))