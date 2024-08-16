import { axios } from "../../../lib/axios";
import { loginClientResponse } from "../schema/loginClient.schema";




export const loginClient = (payload: { email: string, password: string }) => axios.post(`/api/v1/login`, payload)
  .then((data) => loginClientResponse.parse(data))