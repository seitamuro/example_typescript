/*
 ユーザー登録を行うライブラリ
 */
const uuid = require("uuid")
const { sanitize, willSanitize } = require("../tools/utils")

var users = []

function getUserIndex(username) {
    return users.findIndex(x => x.username == username)
}

exports.isValidUsername = (username) => {
    return username.replace(/\s/g, "") != ""
}

exports.isValidPassword = (password) => {
    return password.replace(/\s/g, "") != ""
}

exports.isExists = (username) => {
    return getUserIndex(username) > -1
}

exports.whyRejectLogin = (username, password) => {
    if (!exports.isExists(username)) {
        return `${username} is not exists.`
    }

    const index = getUserIndex(username)

    if (users[index].password != password) {
        return "password is incorrect."
    }

    return ""
}

exports.login = (username, password) => {
    if (exports.whyRejectLogin(username, password) != "") {
        return false
    }

    const index = getUserIndex(username)

    users[index].id = uuid.v4()
    return users[index].id
}

// ログイン中かを判定
exports.auth = (username, id) => {
    const index = getUserIndex(username)

    return users[index].id == id
}

// 登録拒否された理由を返す｡
exports.whyRejectRegistration = (username, password) => {
    // サニタイズされる名前なら登録拒否
    if (willSanitize(username)) {
        return `${username} has invalid characters.`
    }

    // 登録可能な名前かを検証
    if (!exports.isValidUsername(username)) {
        if (username == "") {
            return "username is empty."
        } else {
            return `${username} is invalid username.`
        }
    }

    // 登録可能なパスワードかを検証
    if (!exports.isValidPassword(password)) {
        if (password == "") {
            return "password is empty."
        } else {
            return `${password} is invalid password.`
        }
    }

    // すでに存在するユーザーかを検証
    if (exports.isExists(username)) {
        return `${username} is already exists.`
    }

    return ""
}

exports.registerUser = (username, password) => {
    // 適切なユーザー名・パスワードかを検証
    if (exports.whyRejectRegistration(username, password) != "") {
        return false
    }

    // サニタイズ
    const _username = sanitize(username)
    const _password = sanitize(password)

    // ユーザー登録
    users.push({
        username: _username,
        password: _password,
        id: ""
    })

    return true
}
