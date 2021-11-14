import { useContext, useState, useEffect, useRef } from "react";

import { projectID } from "../data";
import { Context } from "../data/context";

import { ChatEngineWrapper, Socket, ChatFeed, getOrCreateChat } from "react-chat-engine"

export default function Chat(props) {
    const didMountRef = useRef(false)
    const { currentUser } = useContext(Context)
    const [chat, setChat] = useState(null)
    const [headers, setHeaders] = useState({
        "Project-ID": projectID,
        "User-Name": currentUser.username,
        "User-Secret": currentUser.secret,
    })

    useEffect(() => {
        if(!didMountRef.current) {
            didMountRef.current = true
            const data = {
                "usernames": [currentUser.username, props.seller.username],
                "is_direct_chat": true
            }
            getOrCreateChat(headers, data, chat => setChat(chat))
        }
    })

    if (chat === null) return <div />

    return (
        <div style={{ width: "100%" }}>
            <ChatEngineWrapper>
                <Socket
                    projectID={headers["Project-ID"]}
                    userName={headers["User-Name"]}
                    userSecret={headers["User-Secret"]}
                />

                <ChatFeed activeChat={chat.id} />
            </ChatEngineWrapper>
        </div>
    )
}