import { signOut } from "next-auth/react"

const SignOutButton = () => {
    return <button type="button" onClick={() => signOut()} className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        SignOut
    </button>
}

export default SignOutButton