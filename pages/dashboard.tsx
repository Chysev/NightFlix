import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

// Components
import SideNavigation from '../components/Dashboard/SideNavigation'
import MainPage from '../components/Dashboard/MainPage'
import FooterNavigation from '../components/Dashboard/FooterNavigation'

const dashboard: NextPage = () => {

    // For the session
    const { data: session } = useSession()
    // For redirecting the users
    const { push } = useRouter()

    if (session) {
        <div className='flex'>

            <div className='block 768max:hidden'>
                <SideNavigation />
            </div>

            <div>
                <MainPage />
            </div>

            <div className='hidden 768max:block'>
                <FooterNavigation />
            </div>
        </div>
    }

    setTimeout(() => {
        push("/")
    }, 3000)
    return (
        <div></div>
    )
}


export default dashboard
