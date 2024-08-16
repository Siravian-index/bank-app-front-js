import { Center, Loader, ScrollArea, Text, Title, } from "@mantine/core"
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
      <ScrollArea h="80vh">
        {queryTransactions.data?.map((data) => <Transaction data={data} key={data.id} />)}
      </ScrollArea>
    </>
  )
}


export default Transactions