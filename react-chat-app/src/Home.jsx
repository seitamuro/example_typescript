import { useContext, useState, useEffect} from "react"

import io from "socket.io-client"

import { UserContext } from "./UserContext"

const createSocket = (user) => {
    const socket = io.connect("http://localhost:3001")

    socket.emit("validation", user)

    socket.on("approve", msg => {
        console.log(`${msg}`)
    })

    socket.on("error", msg => {
        console.log(`${msg}`)
    })

    return socket
}

const Home = () => {
    const context = useContext(UserContext)
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const newSocket = createSocket(context)
        setSocket(newSocket)
        return () => newSocket.close()
    }, [setSocket])

    return(
        <div>
            {context.id}
        </div>
    )
}

export default Home