import { Client } from "pg"
import express from "express"
import cors from "cors"
import http from "http"
import bodyParser from "body-parser"
import { connect } from "http2"

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

const client = new Client({
    user: "root",
    host: "127.0.0.1",
    database: "postgres",
    password: "reactpostgresql",
    port: 5432
})

client.connect()

app.get("/users", (req, res) => {
    client
        .query("SELECT * FROM users")
        .then(users => res.send(users.rows))
        .catch(e => res.send(e.stack))
})

server.listen(3001, "localhost", () => {
    console.log("Listening on http://localhost:3001")
})