const app = require("express")()
const uuid = require("uuid")
const cors = require("cors")
const http = require("http").Server(app)
const bodyParser = require("body-parser")
const io = require("socket.io")(http, {
    cors: {
        origin: "*:*",
    }
})

var users = []
var logged = []

app.use(bodyParser.json())

app.use(cors())

app.post("/login", (req, res) => {
    console.log(req.body)

    const possibleUser = users.filter(obj => {
        return obj.user == req.body.username
    })

    console.log(possibleUser)

    const loginId = uuid.v4()

    if (!req.body.username) {
        res.status(400).send({message: "username is empty."}).end()
    } else if (!req.body.password) {
        res.status(400).send({message: "password is empty."}).end()
    } else if (possibleUser.length > 0){
        if (possibleUser.password === req.body.password) {
            logged.push(loginId)
            res.send(loginId).end()
        } else {
            res.status(400).send({message: "password is invalid."})
        }
    } else {
        users.push({
            username: req.body.username,
            password: req.body.password,
        })

        logged.push(loginId)

        res.send(loginId).end()
    }
})
    

io.on("connection", socket => {
    console.log("connected")

    socket.on("disconnect", () => {
        console.log("disconnection")
    })
})

http.listen(3001, "localhost", () => {
    console.log("Listening on localhost:3001")
})