import { useState, useEffect } from "react"

import {
    Flex,
    Heading
} from "@chakra-ui/react"
import axios from "axios"

import { Rooms } from "./Rooms"
import { Chats } from "./Chats"

const Home = () => {
    const [username, setUsername] = useState("")
    const [height, setHeight] = useState(100)

    useEffect(() => {
        if (window !== "undefined") {
            setHeight(window.innerHeight)
        }
    }, [setHeight])

    useEffect(() => {
        axios.create({withCredentials: true})
        .post("http://localhost:3001/getUsername")
        .then(res => {
            console.log(`${res.data}`)
            setUsername(`${res.data}`)
        })
        .catch(err => {
            console.log(`${err.response.data}`)
        })
    }, [setUsername])

    return (
        <>
            <Heading>Chat</Heading>
            <Flex>
                <Rooms w="30%" minHeight={height} maxHeight={height}>test</Rooms>
                <Chats w="70%" minHeight={height} maxHeight={height}></Chats>
            </Flex>
        </>
    )
}

export default Home