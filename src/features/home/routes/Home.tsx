import useAuthUser from "react-auth-kit/hooks/useAuthUser"


function Home() {
  const user = useAuthUser()
  console.log({ user })

  return (
    <p>home</p>
  )
}


export default Home