import { Card, Center, Group, Loader, NumberFormatter, Text, Title } from "@mantine/core"
import { useGetAccount } from "../hook/useGetAccount"
import { useUser } from "../../../hook/useUser"


function Account() {
  const user = useUser()
  const queryAccount = useGetAccount()


  if (queryAccount.isFetching) {
    return (
      <Center>
        <Loader color="blue" type="dots" />
      </Center>
    )
  }

  if (queryAccount.isError) {
    return (
      <Center>
        <Text>Something went wrong</Text>
      </Center>
    )
  }
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title>Account Info</Title>
      <Text mt="lg" size="sm" c="dimmed">
        Account id
      </Text>
      <Group justify="space-between" mb="xs" >
        <Text fw={500}>{queryAccount.data?.id}</Text>
        <NumberFormatter prefix="$ " value={queryAccount.data?.balance} thousandSeparator />
      </Group>

      <Text size="sm" c="dimmed">
        {user.email}
      </Text>

      <Text size="sm" c="dimmed">
        {user.cc}
      </Text>
    </Card>
  )
}


export default Account