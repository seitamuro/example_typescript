var express = require("express")
var app = express()
var http = require("http").Server(app)
const io = require("socket.io")(http)
const PORT = process.env.PORT || 7000

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on("connection", (socket) => {
    socket.on("message", (msg) => {
        console.log(`message: ${msg}`)
        io.emit("message", msg)
    })
})

http.listen(PORT, () => {
    console.log(`server listening. Port:${PORT}`)
})