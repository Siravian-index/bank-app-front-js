import { Container, Tabs } from "@mantine/core"
import Account from "../components/Account"


function Home() {

  return (
    <>
      <Tabs defaultValue="Account">
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
          Second tab color is blue, it gets this value from props, props have the priority and will
          override context value
        </Tabs.Panel>

        <Tabs.Panel value="Services" pt="xs">
          Second tab color is blue, it gets this value from props, props have the priority and will
          override context value
        </Tabs.Panel>
      </Tabs>
    </>
  )
}


export default Home