import UserIcon from './UserIcon'

const Navigation = () => {
    return (
        <div className="
        fixed
        items-center
        "
            style={{ backgroundColor: "#0f172a", height: "80px", width: "100%", boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)" }}>

            <div className='
            flex
            max-width-1500
            justify-between
            items-center
            '
                style={{

                    padding: "15px",
                    height: "80px"
                }}>
                <nav className='
                flex 
                gap-10 
                items-center
                text-white 
                font-sans
                '>
                    <h1 className='text-3xl font-bold'>NightFlix</h1>
                    <ul className='flex items-center gap-7'>
                        <li><a><i className="mr-2 ml-2 fa-solid fa-house text-xl"></i>HOME</a></li>
                        <li><a><i className="mr-2 ml-2 fa-solid fa-magnifying-glass text-xl"></i>SEARCH</a></li>
                        <li><a><i className="mr-2 ml-2 fa-solid fa-plus text-xl"></i>WATCHLIST</a></li>
                        <li><a><i className="mr-2 ml-2 fa-solid fa-star text-xl"></i>ORIGINALS</a></li>
                        <li><a><i className="mr-2 ml-2 fa-solid fa-clapperboard text-xl"></i>MOVIES</a></li>
                        <li><a><i className="mr-2 ml-2 fa-solid fa-tv text-xl"></i>SERIES</a></li>
                    </ul>
                </nav>

                <UserIcon />
            </div>
        </div>
    )
}

export default Navigation