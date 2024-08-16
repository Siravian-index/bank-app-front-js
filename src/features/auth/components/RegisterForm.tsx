import { Button, Container, PasswordInput, Text, TextInput, Title } from "@mantine/core"
import { useRegisterClient } from "../hook/useRegisterClient"
import { useForm, zodResolver } from "@mantine/form";
import { registerClientFormSchema } from "../schema/registerClient.schema";




function RegisterForm() {
  const registerMut = useRegisterClient()

  const form = useForm({
    mode: 'controlled',
    initialValues: {
      email: "",
      cc: "",
      password: "",
    },
    validate: zodResolver(registerClientFormSchema),

  });


  async function onRegister() {
    const result = form.validate()
    if (result.hasErrors) {
      return
    }

    const payload = {
      ...form.values,
      rol: "STANDARD",
    }

    await registerMut.mutateAsync(payload)
  }

  return (
    <Container>
      <Title>Register form</Title>
      <TextInput
        {...form.getInputProps('cc')}
        label="CC"
        placeholder="1115048385"
      />
      <TextInput
        {...form.getInputProps('email')}
        label="Email"
        placeholder="john@gmail.com"
      />
      <PasswordInput
        {...form.getInputProps('password')}
        label="Password"
        placeholder="***********"
      />
      <Button
        onClick={() => onRegister()}
        disabled={registerMut.isPending}
      >Register
      </Button>
      {registerMut.isSuccess && (
        <Text>
          Account created successfully
        </Text>
      )}
      {registerMut.isError && (
        <Text>
          "There was an error creating the account, please try again"
        </Text>
      )}
    </Container>
  )
}


export default RegisterForm