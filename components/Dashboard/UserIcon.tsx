import { useSession } from "next-auth/react"

const UserIcon = () => {
    const { data: session } = useSession()

    return (
        <picture>
            <img src={session?.user?.name || undefined} alt="" />
        </picture>
    )
}

export default UserIcon