var express = require("express")
var app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`)
})