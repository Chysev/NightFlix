import type { NextPage } from 'next'

const FooterNavigation: NextPage = () => {
    return (
        <div className='
        grid
        fixed 
        items-center
        '
            style={{
                backgroundColor: "#0f172a",
                width: "100%",
                bottom: "0",
                height: "70px"
            }}>
            <div className='flex justify-between text-white items-center p-2'>
                <a className='text-base'>
                    <i className="mr-3 ml-3 fa-solid fa-house flex items-center"></i>
                    HOME
                </a>
                <a className='text-base'>
                    <i className="mr-3 ml-3 fa-solid fa-star flex items-center"></i>
                    ORIG
                </a>
                <a className="text-base">
                    <i className="mr-3 ml-3 fa-solid fa-plus flex items-center"></i>
                </a>
                <a className='text-base'>
                    <i className="mr-4 ml-4 fa-solid fa-clapperboard flex items-center"></i>
                    Movies
                </a>
                <a className='text-base'>
                    <i className="mr-3 ml-3 fa-solid fa-tv flex items-center"></i>
                    Series
                </a>
            </div>
        </div>
    )
}

export default FooterNavigation