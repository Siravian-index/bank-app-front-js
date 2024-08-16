import { Button, Container, PasswordInput, TextInput, Title } from "@mantine/core"
import { useForm, zodResolver } from "@mantine/form";
import { useLoginClient } from "../hook/useLoginClient";
import { loginClientFormSchema } from "../schema/loginClient.schema";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";




function LoginForm() {
  const signIn = useSignIn();
  const loginMut = useLoginClient()
  const navigate = useNavigate()
  const form = useForm({
    mode: 'controlled',
    initialValues: {
      email: "test02@gmail.com",
      password: "testing01",
    },
    validate: zodResolver(loginClientFormSchema),

  });


  async function onLogin() {
    const result = form.validate()
    if (result.hasErrors) {
      return
    }

    const payload = {
      ...form.values,
    }

    const res = await loginMut.mutateAsync(payload)
    const success = signIn({
      auth: {
        token: res.data.token,
        type: 'Bearer'
      },
      userState: {
        ...res.data.user
      }
    })
    if (success) {
      navigate("/app/home")
    }
  }

  return (
    <Container fluid w="500" maw="500" p="lg" style={{ display: "flex", flexDirection: "column", gap: "1rem", alignSelf: "center" }}>
      <Title>Login form</Title>
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
        onClick={() => onLogin()}
        disabled={loginMut.isPending}
      >
        Login
      </Button>
    </Container>
  )
}


export default LoginForm