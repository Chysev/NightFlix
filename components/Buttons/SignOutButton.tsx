import type { NextPage } from 'next'
import { signOut } from "next-auth/react"

const SignOutButton: NextPage = () => {
    return <button onClick={() => signOut()}></button>
}

export default SignOutButton