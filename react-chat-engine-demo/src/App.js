import { ChatEngine } from "react-chat-engine"

import SecretContext from "./components/context/SecretContext"

import ChatFeed from "./components/ChatFeed"

import { useContext } from "react"
import "./App.css"

export default function App() {
    const secret = useContext(SecretContext)

    return (
        <ChatEngine
            height="100vh"
            projectID={secret.projectID}
            userName={secret.userName}
            userSecret={secret.userSecret}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}