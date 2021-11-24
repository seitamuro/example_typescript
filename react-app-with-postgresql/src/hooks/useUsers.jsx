import { useState, useEffect, useRef } from "react"
import axios from "axios"

const useUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/users")
        .then(res => {setUsers(res.data)})
    }, [])

    return [users]
}

export default useUsers