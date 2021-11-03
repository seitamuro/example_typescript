var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on("connection", socket => {
    console.log("connection")

    socket.on("disconnect", () => {
        console.log("disconnection")
    })
})

http.listen(3000, "localhost", () => {
    console.log(`Listening on localhost:3000`)
})