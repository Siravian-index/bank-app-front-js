import { Button, Container, Tabs } from "@mantine/core"
import Account from "../components/Account"
import Transactions from "../components/Transactions"
import AccountForm from "../components/AccountForm"
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from "react-router-dom";

function Home() {
  const signOut = useSignOut()
  const navigate = useNavigate()
  function logout() {
    signOut()
    navigate("/auth/login")
  }

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <Tabs defaultValue="Account" keepMounted={false}>
        <Tabs.List justify="center">
          <Tabs.Tab value="Account">Account</Tabs.Tab>
          <Tabs.Tab value="Transactions">Transactions</Tabs.Tab>
          <Tabs.Tab value="Services">Services</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Account" pt="xs">
          <Container fluid maw="500">
            <Account />
          </Container>
        </Tabs.Panel>

        <Tabs.Panel value="Transactions" pt="xs">
          <Container fluid maw="500">
            <Transactions />
          </Container>
        </Tabs.Panel>

        <Tabs.Panel value="Services" pt="xs">
          <Container fluid maw="500">
            <AccountForm />
          </Container>
        </Tabs.Panel>
      </Tabs>

      <div style={{ position: "absolute", left: 0, bottom: 0 }}>
        <Button
          color="red"
          onClick={logout}
        >
          Logout
        </Button>
      </div>
    </div>
  )
}


export default Home