import React, { useState } from "react"

import axios from "axios"
import crypto from "crypto"

import { UserContextProvider } from "./UserContext"

const LoginProvider = (props) => {
    const [username, setUserName] = useState("")
    const [password ,setPassword] = useState("")
    const [loginId, setLoginId] = useState("")


    const login = () => {
        if (password) {
            axios.post("http://localhost:3001/login", {
                username: username,
                password: crypto.createHash("md5").update(password).digest("hex"),
            })
            .then(response => {
                console.log(`success ${response.data}`)
                setLoginId(response.data)
            })
            .catch(error => {console.log(`failed ${error.response.data.message}`)})
        }
    }

    if (!loginId) {
        return (
            <form>
                <label>Username: </label>
                <input type="text" id="username" onChange={e => setUserName(e.target.value)}></input><br></br>
                <label>Password: </label>
                <input type="text" id="password" onChange={e => setPassword(e.target.value)}></input><br></br>
                <button type="button" onClick={() => login()}>Login!</button>
            </form>
        )
    } else {
        return (
            <UserContextProvider value={{username: username, id: loginId}}>
                {props.children}
            </UserContextProvider>
        )
    }
}

export { LoginProvider }