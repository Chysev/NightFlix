import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

// Components
import Navigation from '../components/Dashboard/Navigation'
import Search from '../components/Dashboard/Search'
import MainPage from '../components/Dashboard/MainPage'
import FooterNavigation from '../components/Dashboard/FooterNavigation'

const Dashboard = () => {
    // For the session
    const { data: session } = useSession()

    // For redirecting the users
    const { push } = useRouter()

    if (session) {
        return (
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
        )
    }

    setTimeout(() => {
        push("/")
    }, 2000)
    return (
        <div style={{ backgroundColor: "#0e1630", height: "100vh", width: "100%", display: "fixed" }} />
    )
}


export default Dashboard
