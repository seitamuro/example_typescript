const { registerUser, login } = require("../tools/userManger")

const router = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    console.log(`POST /login username: ${username} password: ${password}`)
    res.send(login(username, password))
}

module.exports = router