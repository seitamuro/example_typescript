import e from "cors"
import { useState, useEffect, useContext } from "react"

import { UserContext } from "./UserContext"


const Chat = (props) => {
    const user = useContext(UserContext)
    const [message, setMessage]= useState("")
    const [messages, setMessages] = useState([])

    const sendMessage = (message) => {
        props.socket.emit("message", {
            user: user,
            room: props.room,
            message: message,
        })
    }

    useEffect(() => {
        if (props.socket) {
            props.socket.on("chat-init", (res) => {
                res.map((data, i) => {
                    console.log(`${i} ${data.username} ${data.message}`)
                })
                setMessages(res)
            })

            props.socket.on("chat", data => {
                setMessages(prevMessages => [...prevMessages, data])
            })

            props.socket.emit("enter", props.room)

            return () => {
                props.socket.off("chat-init")
                props.socket.off("chat")
            }
        }
    }, [props.room])

    return (
        <div>
            {messages ? messages.map((data, i) => (<div><b>{data.username}</b><p>{data.message}</p></div>)) : ""}

            <form>
                <label>message:</label>
                <input type="text" onChange={e => setMessage(e.target.value)}></input>
                <input type="button" onClick={() => sendMessage(message)} value="送信"></input>
            </form>
        </div>
    )
}

export { Chat }