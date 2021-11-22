// Importing
import { Client } from "pg"
import express from "express"
import cors from "cors"
import http from "http"
import bodyParser from "body-parser"
import * as socketio from "socket.io"

// create express instance
const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        if (!origin || origin.includes("localhost")) {
            callback(null, true)
        } else {
            callback(new Error(`Origin: ${origin} is now allowed`))
        }
    }
}))

// connect to postgresql
const client = new Client({
    user: "root",
    host: "127.0.0.1",
    database: "postgres",
    password: "reactpostgresql",
    port: 5432
})

client.connect()

// routing
app.get("/users", (req, res) => {
    client
        .query("SELECT * FROM users")
        .then(users => res.send(users.rows))
        .catch(e => res.send(e.stack))
})

app.post("/newuser", (req, res) => {
    const username = req.body.username
    const email = req.body.email

    console.log(`${username} ${email}`)

    client
        .query(
            "INSERT INTO users(username, email) VALUES ($1, $2)",
            [username, email])
        .then(_ => res.send("success"))
        .catch(e => res.send(e.stack))
})

// start listening
server.listen(3001, "localhost", () => {
    console.log("Listening on http://localhost:3001")
})

// socket
const io: socketio.Server = require("socket.io")(server)
io.on("connection", (socket: socketio.Socket) => {
})