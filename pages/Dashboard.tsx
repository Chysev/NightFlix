import type { NextPage } from 'next'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'

// Components
import Navigation from '../components/Dashboard/Navigation'
import Search from '../components/Dashboard/Search'
import MainPage from '../components/Dashboard/MainPage'
import FooterNavigation from '../components/Dashboard/FooterNavigation'

const dashboard: NextPage = () => {
    // For the session
    const { data: session } = useSession()

    // For redirecting the users
    const { push } = useRouter()

    if (session) {
        <div className=''>

            <div className="hidden 1130max:block">
                <Search />
            </div>

            <div className='block 1130max:hidden'>
                <Navigation />
            </div>

            <div>
                <MainPage />
            </div>

            <div className='hidden 1130max:block'>
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
