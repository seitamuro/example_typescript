// モジュールの読み込み
const app = require("express")()
const cors = require("cors")
const http = require("http").Server(app)
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const io = require("socket.io")(http, {
    cors: {
        origin: "*"
    }
})

// 処理内容を追加
app.use(bodyParser.json())
app.use(cors({
    credentials: true,
    origin: (origin, callback) => {
        if (origin.includes("localhost")) {
            callback(null, true)
        } else {
            callback(new Error(`Origin: ${origin} is now allowed`))
        }
    }
}))
app.use(cookieParser())

// ログイン処理
const login = require("./routes/login")
app.use("/login", login)

// ユーザー登録
const register = require("./routes/register")
app.use("/register", register)

// ログインIDのユーザーを返す
const getUsername = require("./routes/getUsername")
app.use("/getUsername", getUsername)

// サーバー起動
http.listen(3001, "localhost", () => {
    console.log("Listening on localhost:3001")
})

// ソケットの処理
const setupSocket = require("./socket")
io.on("connection", setupSocket)