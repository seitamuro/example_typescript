var express = require("express")
var app = express()

app.post("/helloworld", (req, res) => {
    res.end("Hello World")
})

var server = app.listen(8081, "0.0.0.0", () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`server is listening at http://${host}:${port}`)
})