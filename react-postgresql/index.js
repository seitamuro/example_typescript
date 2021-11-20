var { Client } = require("pg")

var client = new Client({
    user: "root",
    host: "127.0.0.1",
    database: "postgres",
    password: "reactpostgresql",
    port: 5432
})

client.connect()

const query = {
    text: "INSERT INTO users(username) VALUES ($1)",
    values: ["user4"]
}

client
    .query(query)
    .then(res => console.log(res.rows[0]))
    .catch(e => console.error(e.stack))

client
    .query("SELECT * FROM users")
    .then(res => console.log(res.rows))
    .catch(e => console.error(e.stack))