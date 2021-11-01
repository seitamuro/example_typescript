var express = require("express")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)

var port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/chat.html`)
})

http.listen(port, () => {
    console.log(`listening on *: ${port}`)
})