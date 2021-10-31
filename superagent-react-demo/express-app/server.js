var express = require("express")

var app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

app.get("/helloworld", (req, res) => {
    res.send("Hello World!")
})

var server = app.listen(8081, "0.0.0.0", () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`listening at http://${host}:${port}`)
})