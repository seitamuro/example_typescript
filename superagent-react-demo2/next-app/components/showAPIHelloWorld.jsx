import { useState, useEffect } from "react";
import request from "superagent"

export default function ShowAPIHelloWorld() {
    const [message, setMessage] = useState("No message")
    const url = "http://localhost:8081/helloworld"

    useEffect(() => {
        request
            .get(url)
            .end((err, res) => {
                if (err) {
                    console.log(err)
                    setMessage("Error is ocurred!")
                } else {
                    console.log(res.text)
                    setMessage(res.text)
                }
            })
    }, [url])

    return (
        <p>{message}</p>
    )
}