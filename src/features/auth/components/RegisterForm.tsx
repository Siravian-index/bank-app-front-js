import { Button, Container, PasswordInput, TextInput, Title } from "@mantine/core"
import { useRegisterClient } from "../hook/useRegisterClient"




function RegisterForm() {

  const registerMut = useRegisterClient()

  async function onRegister() {
    const res = await registerMut.mutateAsync({
      "email": "client01@gmail.com",
      "cc": "133123121",
      "password": "testing01",
      "rol": "STANDARD",
    })

    
    debugger
  }

  return (
    <Container>
      <Title>Register form</Title>
      <TextInput
        label="CC"
        placeholder="1115048385"
      />
      <TextInput
        label="Email"
        placeholder="john@gmail.com"
      />
      <PasswordInput
        label="Password"
        placeholder="***********"
      />
      <Button
        onClick={() => onRegister()}
        disabled={registerMut.isPending}
      >Register
      </Button>
      <Button onClick={() => console.log(registerMut)}>debug</Button>
      <Button onClick={() => registerMut.reset()}>mutate reset</Button>


    </Container>
  )
}


export default RegisterForm