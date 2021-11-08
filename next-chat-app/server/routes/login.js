const { login, whyRejectLogin } = require("../tools/userManger")

module.exports = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    console.log(`POST /login username: ${username} password: ${password}`)

    const id = login(username, password)
    console.log(`login id is ${id}`)
    if (id) {
        res.send(`login success: ${id}`)
    } else {
        res.status(400).send(whyRejectLogin(username, password))
    }
}