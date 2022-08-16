import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

// Components 
import Login from '../components/Main/Login'


// Login and Redirect || Redirect the User if its already logged in

const Home: NextPage = () => {

  // For the session
  const { data: session } = useSession()
  // For redirecting the users
  const { push } = useRouter()

  if (session) {
    setTimeout(() => {
      push("/dashboard")
    }, 3000)
    return (
      <div>Redirecting you to the Dashboard in 3 seconds..</div>
    )
  }

  return <Login />
}


export default Home
