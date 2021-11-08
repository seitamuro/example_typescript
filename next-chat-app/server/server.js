// モジュールの読み込み
const app = require("express")()
const cors = require("cors")
const http = require("http").Server(app)
const bodyParser = require("body-parser")
const io = require("socket.io")(http, {
    cors: {
        origin: "*"
    }
})

// 処理内容を追加
app.use(bodyParser.json())
app.use(cors())

// ログイン処理
const login = require("./routes/login")
app.use("/login", login)

// ユーザー登録
app.post("/register", (req, res) => {
    console.log(`${req.body.username} ${req.body.password}`)

    return registerUser(req.body.username, req.body.password)
})

// サーバー起動
http.listen(3001, "localhost", () => {
    console.log("Listening on localhost:3001")
})