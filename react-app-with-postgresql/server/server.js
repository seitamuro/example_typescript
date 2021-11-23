const setupHandler = require("./handler")
const app = require("express")()
const http = require("http").createServer(app)
const io = require("socket.io")(http, {
    cors: {
        origin: "http://localhost*"
    }
})

http.listen(3001, "localhost", () => {
    console.log("Listening on http://localhost:3001")
})

setupHandler(io)