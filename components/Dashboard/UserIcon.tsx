import { useSession, signOut } from "next-auth/react"
import styles from '../../public/uicon.module.scss'
const UserIcon = () => {
    const { data: session } = useSession()

    return (
        <picture>
            <img onClick={() => signOut()} src={session?.user?.image || undefined} className={`${styles.rounded_full} rounded-full cursor-pointer`} alt="" />
        </picture>
    )
}

export default UserIcon