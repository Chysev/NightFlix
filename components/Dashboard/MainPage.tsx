import Vidoes from "./Videos"

const MainPage = () => {
    return (
        /* Parent Div */
        <div className="
        flex
        min-height"
            style={{
                backgroundColor: "#0e1630",
            }}>

            {/* Children Div */}

            <div className="
            flex
            min-height 
            max-width 
            m-auto
            justify-center"
                style={{
                    width: "1280px",
                }}>

                {/* Video Starts Here */}
                <Vidoes />
            </div>
        </div>
    )
}

export default MainPage