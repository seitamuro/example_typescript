var express = require("express")
var app = express()
var bodyParser = require("body-parser")
const { response } = require("express")

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index-post.html`)
})

app.post("/process_post", urlencodedParser, (req, res) => {
    var response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    }
    console.log(response)
    res.end(JSON.stringify(response))
})

var server = app.listen(8081, "localhost", () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`)
})