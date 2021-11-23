// Import
const pg = require("pg")
const express = require("express")
const http = require("http")

// create express instance
const app = express()
const server = http.createServer(app)

// setup socket
const io = require(io)(http)

// connect to PostgreSQL
const { Client } = require("pg")
const client = new Client({
    user: "root",
    host: "127.0.0.1",
    database: "postgres",
    password: "reactappwithpostgresql",
    port: 5432
})
client.connect()

// listening
server.listen(3001, "localhost", () => {
    console.log("listening on port 3001")
})