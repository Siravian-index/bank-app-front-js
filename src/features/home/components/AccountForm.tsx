import { Button, Container, Select, Text, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { useState } from "react";
import { accountFormSchema } from "../schema/accountForm.schema";
import { postAccountAction } from "../api/postAccountAction";


type Status = "IDLE" | "LOADING" | "SUCCESS" | "ERROR"
function AccountForm() {
  const [status, setStatus] = useState<Status>("IDLE")
  const [type, setType] = useState<string | null>('');

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      amount: "",
      recipientAccountId: "",
      type,
    },
    validate: zodResolver(accountFormSchema),

  });


  async function onSubmit() {
    const isValid = form.validate()
    if (!isValid || !Boolean(type?.length)) {
      return
    }

    try {
      setStatus("LOADING")
      const payload = {
        amount: Number(form.values.amount),
        recipientAccountId: form.values.recipientAccountId,
        type: `${form.values.type}`
      }
       await postAccountAction(payload)
      setStatus("SUCCESS")
      debugger
    } catch (error) {
      setStatus("ERROR")
      console.log(error)
    }


  }

  return (
    <>
      <Container fluid w="500" maw="500" p="lg" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Select
          label="Type"
          data={['DEPOSIT', 'WITHDRAW', 'TRANSFER',]}
          value={type} onChange={(v) => {
            setType(v)
            form.setFieldValue("type", v)
            form.setFieldValue("recipientAccountId", "")
          }}
          placeholder="Action type"
        />
        <TextInput
          {...form.getInputProps('amount')}
          label="Amount"
          placeholder=""
        />
        {
          type === "TRANSFER" && (
            <TextInput
              {...form.getInputProps('recipientAccountId')}
              label="Recipient account"
              placeholder="accountId"
            />
          )
        }


        <Button
          onClick={onSubmit}
          disabled={status === "LOADING"}
        >
          Accept
        </Button>

        {status === "SUCCESS" && (
          <Text mt="lg" size="sm" c="dimmed">
            Action completed successfully
          </Text>
        )}


        {status === "ERROR" && (
          <Text mt="lg" size="sm" c="dimmed">
            Action could not be completed
          </Text>
        )}
      </Container>
    </>
  )
}


export default AccountForm