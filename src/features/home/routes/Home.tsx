import { Container, Tabs } from "@mantine/core"
import Account from "../components/Account"
import Transactions from "../components/Transactions"
import AccountForm from "../components/AccountForm"


function Home() {

  return (
    <>
      <Tabs defaultValue="Account" keepMounted={false}>
        <Tabs.List justify="center">
          <Tabs.Tab value="Account">Account</Tabs.Tab>
          <Tabs.Tab value="Transactions">Transactions</Tabs.Tab>
          <Tabs.Tab value="Services">Services</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Account" pt="xs">
          <Container fluid w="500" maw="500">
            <Account />
          </Container>
        </Tabs.Panel>

        <Tabs.Panel value="Transactions" pt="xs">
          <Container fluid w="500" maw="500">
            <Transactions />
          </Container>
        </Tabs.Panel>

        <Tabs.Panel value="Services" pt="xs">
          <Container fluid w="500" maw="500">
            <AccountForm />
          </Container>
        </Tabs.Panel>
      </Tabs>
    </>
  )
}


export default Home