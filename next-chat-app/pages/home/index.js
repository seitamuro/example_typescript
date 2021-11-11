import { useState, useEffect } from "react"

import {
    Box,
    Flex,
    VStack,
} from "@chakra-ui/react"
import axios from "axios"

import { Rooms } from "./Rooms"
import { Chats } from "./Chats"
import { Header } from "../../components/Header"

const Home = () => {
    const [username, setUsername] = useState("")
    const [height, setHeight] = useState(100)
    const [width, setWidth] = useState(100)

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
            console.log(`${err.response.data}`)
        })
    }, [setUsername])

    return (
        <Box maxH={height} minH={height} bg="green.300">
                <Header w="100%" />
                <Flex maxH="100vh" bg="gray.300">
                    <Rooms w="30%" h="100vh"></Rooms>
                    <Chats w="70%" h="full"></Chats>
                </Flex>
        </Box>
    )
}

export default Home