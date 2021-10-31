var express = require("express")

var bodyParser = require("body-parser")

var app = express()

app.use(bodyParser.json())

var players = [
    {number: 10, name: "Kagawa"},
    {number: 4, name: "Honda"},
    {number: 5, name: "Nagatomo"},
    {number: 9, name: "Okazaki"}
]

app.get("/", (req, res) => {
    res.send("Hello Express")
})

app.get("/players", (req, res) => {
    res.send(players)
})

app.post("/players", (req, res) => {
    players.push({
        number: req.body.number,
        name: req.body.name
    })

    res.sendStatus(200)
})

app.get("/players/:number", (req, res, next) => {
    var targets = players.filter((p) => {
        return p.number.toString() === req.params.number
    })

    if (0 < targets.length) {
        res.send(targets[0])
    } else {
        next()
    }
})

var server = app.listen(3000, "localhost", () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Listening at http://${host}:${port}`)
})