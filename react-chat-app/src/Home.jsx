import { useContext } from "react"

import { UserContext } from "./UserContext"

const Home = () => {
    const context = useContext(UserContext)
    return(
        <div>
            {context.id}
        </div>
    )
}

export default Home