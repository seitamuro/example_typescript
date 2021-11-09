import { useState, useEffect } from "react"

import {
    Text,
    Flex,
    Box
} from "@chakra-ui/react"
import axios from "axios"

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
            <Box w="30%" minHeight={window.innerHeight} maxHeight={window.innerHeight} bg="red.500" overflowY="scroll" className="rooms"
                sx={{
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    "&.rooms": {
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none"
                    }
                }}
            >
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                aldkfjalksdfjl<br></br>
                88888888888888888<br></br>
            </Box>
            <Box w="70%" bg="blue.500" minHeight={window.innerHeight} maxHeight={window.innerHeight}>Chats</Box>
        </Flex>
    )
}

export default Home