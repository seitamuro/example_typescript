var { Client } = require("pg")

var client = new Client({
    user: "root",
    host: "127.0.0.1",
    database: "postgres",
    password: "connectpostgresql",
    port: 5432
})

client.connect()