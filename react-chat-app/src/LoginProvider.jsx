import React, { useState } from "react"

import { UserContextProvider } from "./UserContext"

const LoginForm = (props) => {
    return (
        <button onClick={props.callback}>Login!</button>
    )
}

const LoginProvider = (props) => {
    const [loginId, setLoginId] = useState()

    return (
        <div>
            {!loginId
            ? <LoginForm callback={() => setLoginId("login id")} />
            : <UserContextProvider value={{id: loginId}}>{props.children}</UserContextProvider>}
        </div>
    )
}

export { LoginProvider }