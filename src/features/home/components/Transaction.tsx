import { Card, Group, NumberFormatter, Text } from "@mantine/core"
import { transactionType } from "../schema/transactions.schema"
import dayjs from "dayjs"

interface Props {
  data: transactionType
}

function Transaction({ data }: Props) {
  const { createdAt, id, money, type, recipientAccountId, ownerAccountId } = data

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder mt="md" mb="md">
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>ID: {id}</Text>
        <Text fw={500}>{dayjs(createdAt).format("YYYY-MM-DDTHH:mm")}</Text>
      </Group>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{type}</Text>
        <NumberFormatter prefix="$ " value={money} thousandSeparator />
      </Group>

      <Text size="sm" c="dimmed">
        FROM: {ownerAccountId}
      </Text>

      {recipientAccountId && (
        <Text size="sm" c="dimmed">
          TO: {recipientAccountId}
        </Text>
      )}
    </Card>
  )
}


export default Transaction