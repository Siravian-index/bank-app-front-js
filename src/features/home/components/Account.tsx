import { Card, Center, Group, Loader, NumberFormatter, Text } from "@mantine/core"
import { useGetAccount } from "../hook/useGetAccount"
import { useUser } from "../../../hook/useUser"


function Account() {
  const user = useUser()
  const queryAccount = useGetAccount()

  console.log(queryAccount.data)

  if (queryAccount.isFetching) {
    return (
      <Center>
        <Loader color="blue" type="dots" />
      </Center>
    )
  }
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>

      <Group justify="space-between" mt="md" mb="xs">
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