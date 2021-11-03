var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.get("/namespace", (req, res) => {
    res.sendFile(`${__dirname}/namespace.html`)
})

var nsp = io.of("/my-namespace")
var clients = 0
nsp.on("connection", (socket) => {
    clients++
    nsp.emit("hi", `Hello everyone! x ${clients}`)

    socket.on("disconnect", () => {
        clients--;
        nsp.emit("hi", `Hello everyone! x ${clients}`)
    })
})

var nsp2 = io.of("/my-namespace2")
var clients2 = 0
nsp2.on("connection", (socket) => {
    clients2++
    nsp2.emit("hi", `Hello everyone! x ${clients2}`)

    socket.on("disconnect", () => {
        clients2--;
        nsp.emit("hi", `Hello everyone! x ${clients2}`)
    })
})

http.listen(3000, () => {
    console.log(`Listening on *:3000`)
})