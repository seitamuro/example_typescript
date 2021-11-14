var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

var roomno = 1
io.on("connection", socket => {
    socket.join(`room-${roomno}`)
    io.sockets.in(`room-${roomno}`).emit("connectToRoom", `You are in room-${roomno}`)
})

http.listen(3000, () => {
    console.log(`Listening on *:3000`)
})