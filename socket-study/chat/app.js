var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

var users = []
io.on("connection", (socket) => {
    console.log("A user connected")
    socket.on("setUsername", (data) => {
        console.log(data)
        if (users.indexOf(data) > -1) {
            socket.emit("userExists", `${data} username is taken! Try some other username.`)
        } else {
            users.push(data)
            socket.emit("userSet", { username: data })
        }
    })
    socket.on("msg", (data) => {
        io.sockets.emit("newmsg", data)
    })
})

http.listen(3000, () => {
    console.log("listening on localhost:3000")
})