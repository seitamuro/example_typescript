var express = require("express")
var app = express()
var fs = require("fs")

app.get("/listUsers", (req, res) => {
    fs.readFile(`${__dirname}/public/users.json`, "utf8", (err, data) => {
        console.log(data)
        res.end(data)
    })
})

var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

app.post("/addUser", (req, res) => {
    fs.readFile(`${__dirname}/public/users.json`, "utf8", (err, data) => {
        data = JSON.parse(data)
        data["user4"] = user["user4"]
        console.log(data)
        res.end(JSON.stringify(data))
    })
})

app.get("/:id", (req, res) => {
    fs.readFile(`${__dirname}/public/users.json`, "utf8", (err, data) => {
        var users = JSON.parse(data)
        var user = users["user" + req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})

app.delete("/deleteUser", (req, res) => {
    fs.readFile(`${__dirname}/public/users.json`, "utf8", (err, data) => {
        data = JSON.parse(data)
        delete data["user" + 2]

        console.log(data)
        res.end(JSON.stringify(data))
    })
})

var server = app.listen(8081, "localhost", () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`)
})