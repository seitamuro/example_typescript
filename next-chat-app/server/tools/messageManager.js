const { getLoggedInUser } = require("../tools/userManger")

var messages = []

const saveMessage = (user_id, message) => {
    const user = getLoggedInUser(user_id)

    messages.push({
        username: user.username,
        message: message
    })
}

const getMessages = (user_id) => {
    const user = getLoggedInUser(user_id)
    return messages.filter(message => message.username == user.username)
}

module.exports = saveMessage
module.exports = getMessages