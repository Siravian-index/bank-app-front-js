import { Center, Loader, Text, Title, } from "@mantine/core"
import { useGetTransactions } from "../hook/useGetTransactions"
import Transaction from "./Transaction"


function Transactions() {
  const queryTransactions = useGetTransactions()


  if (queryTransactions.isFetching) {
    return (
      <Center>
        <Loader color="blue" type="dots" />
      </Center>
    )
  }


  if (queryTransactions.isError) {
    return (
      <Center>
        <Text>Something went wrong</Text>
      </Center>
    )
  }

  return (
    <>
      <Title>Transactions</Title>
      {queryTransactions.data?.map((data) => <Transaction data={data} key={data.id}/>)}
    </>
  )
}


export default Transactions