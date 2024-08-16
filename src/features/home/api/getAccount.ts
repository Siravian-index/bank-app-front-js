import { axios } from "../../../lib/axios";
import { accountSchemaResponse } from "../schema/account.schema";




export const getAccount = () => axios.get(`/api/v1/account/check`)
  .then((data) => accountSchemaResponse.parse(data.data))