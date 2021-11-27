import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { io } from "socket.io-client"

import { useSocket } from "./useSocket"

const useUsers = () => {
    const [users, setUsers] = useState([])
    const socket2 = useRef(null)
    const [socket] = useSocket("http://localhost:3001")

    useEffect(() => {
        socket2.current = io("http://localhost:3001")
        return socket2.current.close()
    }, [])

    useEffect(() => {
        axios.get("http://localhost:3001/users")
        .then(res => {setUsers(res.data)})
    }, [])

    const addUser = (user) => {
        axios.post("http://localhost:3001/adduser", user)
    }

    const delUser = (user_id) => {
        const data = {
            "user_id": user_id
        }
        axios.post("http://localhost:3001/deluser", data)
    }

    return [users, addUser, delUser]
}

export default useUsers