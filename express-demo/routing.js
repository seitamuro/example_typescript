var express = require("express")
var app = express()

app.get("/", (req, res) => {
    console.log("GET a GET request for the homepage.")
    res.send("Hello GET")
})

app.post("/", (req, res) => {
    console.log("Got a POST request for the homepage.")
    res.send("Hello POST")
})

app.delete("/del_user", (req, res) => {
    console.log("Got a DELETE request for homepage.")
    res.send("Hello DELETE")
})

app.get("/list_user", (req, res) => {
    console.log("Got a GET request for /list_user")
    res.send("Page Listing")
})

app.get("/ab*cd", (req, res) => {
    console.log("Got a GET request for /ab*cd")
    res.send("Page Pattern Match")
})

var server = app.listen(8081, "localhost", () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`)
})