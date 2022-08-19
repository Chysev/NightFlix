import UserIcon from "./UserIcon"

const Search = () => {
    return (
        <div className="fixed "
            style={{
                background: "#0f172a",
                height: "70px",
                width: "100%"
            }}>
            <div className="
            flex 
            justify-between 
            items-center 
            text-white 
            p-3"
                style={{ height: "70px" }}>
                <div>
                    <h1 className="text-3xl font-bold">NightFlix</h1>
                </div>


                <div className="flex items-center gap-4">
                    <i className="mr-2 ml-2 fa-solid fa-bell text-xl"></i>
                    <i className="mr-2 ml-2 fa-solid fa-magnifying-glass text-xl"></i>
                    <UserIcon />
                </div>
            </div>
        </div>
    )
}

export default Search