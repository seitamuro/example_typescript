import { useState, useEffect } from "react"

import {
    Text
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
        <>
            <Text>Home</Text>
            <Text>Username: {username}</Text>
        </>
    )
}

export default Home