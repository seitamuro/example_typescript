import { useRef, useState, useEffect } from "react"

import { io } from "socket.io-client"

const useSocket = (url) => {
    const socket = useRef(null)

    useEffect(() => {
        const newSocket = io(url)
        socket.current = newSocket

        return socket.current.close()
    }, [])

    return [socket]
}

export { useSocket }