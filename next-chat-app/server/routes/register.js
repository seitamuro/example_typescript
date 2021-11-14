const { registerUser, whyRejectRegistration } = require("../tools/userManger")

module.exports = (req, res) => {
    const username = req.body.username
    const password = req.body.password

    console.log("POST /register")

    if (registerUser(username, password)) {
        res.send("register success")
    } else {
        res.status(400).send(whyRejectRegistration(username, password))
    }
}