import { useState, useEffect } from "react"

import {
    Box,
    Flex,
    VStack,
} from "@chakra-ui/react"
import axios from "axios"
import io from "socket.io-client"
import { useCookies } from "react-cookie"

import { Rooms } from "./Rooms"
import { Chats } from "./Chats"
import { Header } from "../../components/Header"

const createSocket = (user_id) => {
    const socket = io.connect("http://localhost:3001")

    socket.emit("send-message", {
        user_id: user_id,
        message: "test message"
    })

    return socket
}

const Home = () => {
    const [username, setUsername] = useState("")
    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)
    const [socket, setSocket] = useState(null)
    const [cookie] = useCookies()

    useEffect(() => {
        const newSocket = createSocket(cookie.login_id)
        setSocket(newSocket)
        return () => newSocket.close()
    }, [setSocket])

    useEffect(() => {
        if (window !== "undefined") {
            setHeight(window.innerHeight)
        }
    }, [setHeight])

    useEffect(() => {
        if (window !== "undefined") {
            setWidth(window.innerWidth)
        }
    }, [setWidth])

    useEffect(() => {
        axios.create({withCredentials: true})
        .post("http://localhost:3001/getUsername")
        .then(res => {
            console.log(`${res.data}`)
            setUsername(`${res.data}`)
        })
        .catch(err => {
            console.log(`${err}`)
        })
    }, [setUsername])

    const messages = [
        {
            who: "mine",
            message: "hello"
        },
        {
            who: "others",
            message: "hello"
        },
        {
            who: "mine",
            message: "verrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrry long message."
        },
        {
            who: "others",
            message: "verrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrry long message."
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
        {
            who: "mine",
            message: "message"
        },
    ]

    return (
        <Box maxH={height} minH={height} bg="green.300">
                <Header w="100%" />
                <Flex>
                    <Rooms w="30%" maxH={height-100} minH={height-100}></Rooms>
                    <Chats w="70%" maxH={height-100} minH={height-100} messages={messages}></Chats>
                </Flex>
        </Box>
    )
}

export default Home