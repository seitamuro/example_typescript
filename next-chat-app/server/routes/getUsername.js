const { getLoggedInUser } = require("../tools/userManger")

module.exports = (req, res) => {
    const user = getLoggedInUser(`${req.cookies["login_id"]}`)

    console.log(`login_id = ${req.cookies["login_id"]}`)

    if (user) {
        res.send(`${user.username}`)
    } else {
        res.send(``)
    }
}