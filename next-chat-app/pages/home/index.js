import { useState, useEffect } from "react"

import {
    Flex,
    Box
} from "@chakra-ui/react"
import axios from "axios"

import { Rooms } from "./Rooms"
import { Chats } from "./Chats"

const Home = () => {
    const [username, setUsername] = useState("")

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
        <Flex>
            <Rooms w="30%">test</Rooms>
            <Chats w="70%"></Chats>
        </Flex>
    )
}

export default Home