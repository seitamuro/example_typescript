var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

var clients = 0

io.on("connection", (socket) => {
    clients++

    io.sockets.emit("broadcast", { description: clients + " clients connected!"})
    socket.on("disconnect", () => {
        clients--;
        io.sockets.emit("broadcast", { description: clients + " clients connected!"})
    })
})

http.listen(3000, () => {
    console.log(`Listening on *:3000`)
})