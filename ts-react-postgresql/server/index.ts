import { Client } from "pg"

var client = new Client({
    user: "root",
    host: "127.0.0.1",
    database: "postgres",
    password: "reactpostgresql",
    port: 5432
})

client.connect()

client
    .query("SELECT * from users")
    .then(res => console.log(res.rows))
    .catch(e => console.error(e.stack))