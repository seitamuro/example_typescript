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
    console.log("connection")
    socket.on("disconnect", () => {
        console.log("disconnection")
    })

    // 入室処理
    socket.on("enter-room", (data) => {
        console.log(`${data.username} wants to enter ${data.room}?`)

        if (users.indexOf(data.username) > -1 || data.room === "") { // error!
            console.log(`${data.username} is exists! So you can not enter ${data.room}!`)
            socket.emit("error", `${data.username} is exists!`)
        } else { // OK!
            console.log(`OK!`)
            users.push(data.username)
            socket.join(data.room)
            fs.readFile("./chat.html", (error, data) => {
                if (error) throw error
                else socket.emit("chat", {html: data.toString(), messages: messages[`${data.room}`]})
            })
        }
    })

    // チャットルームの処理
    socket.on("send-message", data => {
        console.log("get new message!")
        if (data.message !== "") {
            console.log(`reive and broadcast ${data.message} to ${data.room}`)

            if (!messages[`${data.room}`]) {
                messages[`${data.room}`] = []
            }
            messages[`${data.room}`].push(data.message)
            io.to(data.room).emit("update-message", `<b>${data.username}</b> <p style="display: inline;">${data.message}<\p>`)
        }
    })
})

http.listen(3000, "localhost", () => {
    console.log(`Listening on localhost:3000`)
})