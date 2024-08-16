import { axios } from "../../../lib/axios";
import { transactionsSchemaResponse } from "../schema/transactions.schema";




export const getTransactions = () => axios.get(`/api/v1/transactions/check`)
  .then((data) => transactionsSchemaResponse.parse(data.data))
