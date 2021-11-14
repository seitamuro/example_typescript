// 必要モジュールの読み込み
var express = require("express")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var fs = require("fs")

// ユーザーデータを格納
var users = []

// ルームごとのメッセージを格納
var messages = {}

// 静的ファイルを配信
app.use(express.static(`${__dirname}/public`))

// 入室フォームを提供
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

// ソケットの処理
io.on("connection", socket => {
    // 接続・切断の表示
    socket.on("disconnect", () => {
    })

    // 入室処理
    socket.on("enter-room", (data) => {

        if (users.indexOf(data.username) > -1 || data.room === "") { // error!
            socket.emit("error", `${data.username} is exists!`)
        } else { // OK!
            users.push(data.username)
            socket.join(data.room)
            fs.readFile("./chat.html", (error, html) => {
                if (error) throw error
                else socket.emit("chat", {html: html.toString(), messages: messages[`${data.room}`]})
                io.to(data.room).emit("entering-new-user", data.username)
            })
        }
    })

    // チャットルームの処理
    socket.on("send-message", data => {
        if (data.message !== "") {

            if (!messages[`${data.room}`]) {
                messages[`${data.room}`] = []
            }

            messages[`${data.room}`].push({username: data.username, message: data.message})
            io.to(data.room).emit("update-message", `<b>${data.username}</b> <p style="display: inline;">${data.message}</p><br>`)
        }
    })
})

http.listen(3000, "localhost", () => {
    console.log(`Listening on localhost:3000`)
})