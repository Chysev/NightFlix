import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

// Components 
import Login from '../components/Main/Login'


// Login and Redirect || Redirect the User if its already logged in

const Home = () => {

  // For the session
  const { data: session } = useSession()
  // For redirecting the users
  const { push } = useRouter()

  if (session) {
    setTimeout(() => {
      push("/Dashboard")
    }, 2000)
    return (
      <div style={{ backgroundColor: "#0e1630", height: "100vh", width: "100%", display: "fixed" }} />
    )
  }

  return <Login />
}


export default Home
