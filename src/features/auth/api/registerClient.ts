import { axios } from "../../../lib/axios";
import { registerClientResponse } from "../schema/registerClient.schema";




export const registerClient = (payload: {email: string, cc: string, password: string, rol: string}) => axios.post(`/api/v1/register`, payload)
.then((data) => registerClientResponse.parse(data.data))