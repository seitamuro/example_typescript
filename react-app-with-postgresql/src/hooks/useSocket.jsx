import { useRef, useState, useEffect } from "react"

import socketio from "socket.io-client"

const useSocket = (url) => {
    const socket = useRef(null)

    console.log("useSocket")

    useEffect(() => {
        console.log("connecting...")
        const newSocket = socketio(url)
        socket.current = newSocket
    }, [])

    const setOn = (event, callback) => {
        if (socket.current) {
            socket.current.on(event, callback)
        }
    }

    return [socket, setOn]
}

export { useSocket }