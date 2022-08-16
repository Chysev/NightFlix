import type { NextPage } from 'next'
import Link from 'next/link'

// Components | Buttons
import GoogleLoginBtn from '../Buttons/GoogleLogin'
import GitHubLoginBtn from '../Buttons/GitHubLogin'
import FacebookLoginBtn from '../Buttons/FacebookLogin'
import AppleLoginBtn from '../Buttons/AppleLogin'

const Login: NextPage = () => {
    return (
        <div className=' 
        flex
        justify-center
        bg-no-repeat	
        bg-cover
        h-screen 
        max-height 
        Login'>

            <form className="
                flex
                flex-col
                gap-6
                items-center
                m-auto
                rounded-md
                "
                action="">

                <h1 className='text-5xl font-bold font-sans text-blue-900'>NightFlix</h1>

                <input className='
                        h-12
                        w-80
                        p-4
                        text-base
                        rounded-md 
                        m-auto
                        
                    '
                    type="Email" name="Email" id="Email" placeholder='example@example.com' />



                <input className='
                        h-12
                        w-80
                        p-4
                        text-base
                        rounded-md 
                        m-auto
                        
                    '
                    type="Password" name="Password" id="Password" placeholder='********' />


                <button type="button" className="
                text-white 
                bg-gradient-to-r 
                from-cyan-500 
                to-blue-500 
                hover:bg-gradient-to-bl 
                focus:ring-4 
                focus:outline-none 
                focus:ring-cyan-300 
                dark:focus:ring-cyan-800 
                font-medium 
                rounded-lg 
                text-sm 
                px-10 
                py-2.5 
                text-center 
                m-auto 
                ">
                    Login
                </button>

                <Link href="/register">
                    <a className='underline text-white'>Register Here</a>
                </Link>

                <div className="grid grid-cols-2 768max:grid-cols-1 m-auto">
                    <GoogleLoginBtn />
                    <GitHubLoginBtn />
                    <FacebookLoginBtn />
                    <AppleLoginBtn />
                </div>
            </form>
        </div >
    )
}

export default Login