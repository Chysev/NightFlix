import Link from 'next/link'

const register = () => {
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
                    type="username" name="username" id="username" placeholder='John' />

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
                    Register
                </button>

                <Link href="/">
                    <a className='underline text-white'>Already have an account? Login</a>
                </Link>


            </form>
        </div>
    )
}

export default register