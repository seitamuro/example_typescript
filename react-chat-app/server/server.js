const app = require("express")()
const uuid = require("uuid")
const cors = require("cors")
const http = require("http").Server(app)
const bodyParser = require("body-parser")
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
    }
})

var users = []
var chats = {}

app.use(bodyParser.json())

app.use(cors())

app.post("/login", (req, res) => {
    console.log(req.body)

    const index = users.findIndex(x => x.username === req.body.username)

    const loginId = uuid.v4()

    if (!req.body.username) {
        res.status(400).send({message: "username is empty."}).end()
    } else if (!req.body.password) {
        res.status(400).send({message: "password is empty."}).end()
    } else if (index > -1){
        if (users[index].password === req.body.password) {
            users[index].id = loginId
            res.send(loginId).end()
        } else {
            res.status(400).send({message: "password is invalid."})
        }
    } else {
        users.push({
            username: req.body.username,
            password: req.body.password,
            id: loginId,
        })
        res.send(loginId).end()
    }
})
    

io.on("connection", socket => {
    console.log("connected")

    socket.on("message", data => {
        chats[data.room].push({username: data.user.username,message: data.message})

        io.to(data.room).emit("chat", {username: data.user.username, message: data.message})

        console.log(`${data.message}`)
    })

    socket.on("validation", user => {
        const index = users.findIndex(x => x.username == user.username)

        if (index > -1){
            if (user.id == users[index].id) {
                socket.emit("approve", "welcome")
            } else {
                socket.emit("error", "your id is invalid.")
            }
        } else {
            socket.emit("error", "your username is invalid.")
        }
    })

    socket.on("enter", room => {
        console.log("enter")
        socket.join(room)

        if (!chats[room]) {
            chats[room] = []
            socket.emit("chat-init", [])
        } else {
            socket.emit("chat-init", chats[room])
        }
    })

    socket.on("disconnect", () => {
        console.log("disconnection")
    })
})

http.listen(3001, "localhost", () => {
    console.log("Listening on localhost:3001")
})