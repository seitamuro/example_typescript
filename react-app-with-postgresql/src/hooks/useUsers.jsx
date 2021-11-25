import { useState, useEffect, useRef } from "react"
import axios from "axios"

const useUsers = () => {
    const [users, setUsers] = useState([])

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