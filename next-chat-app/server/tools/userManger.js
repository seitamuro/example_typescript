/*
 ユーザー登録を行うライブラリ
 */
const uuid = require("uuid")

var users = []

function getUserIndex(username) {
    return users.findIndex(x => x.username == username)
}

exports.isExists = (username) => {
    return getUserIndex(username) > -1
}

exports.registerUser = (username, password) => {
    if (exports.isExists(username)) {
        return false
    }

    users.push({
        username: username,
        password: password,
        id: ""
    })

    return true
}

exports.login = (username, password) => {
    const index = getUserIndex(username)
    const isLogin = users[index].password == password

    if (isLogin) {
        users[index].id = uuid.v4()
        return users[index].id
    }

    return ""
}

exports.auth = (username, id) => {
    const index = getUserIndex(username)

    return users[index].id == id
}