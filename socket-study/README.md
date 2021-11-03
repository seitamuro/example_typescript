# Socket.ioとは

双方向・リアルタイム・イベント駆動型で､ブラウザとサーバー間の通信を可能にするライブラリである｡多くの言語で実行されており､node.jsのサーバーとブラウザ用のJavaScriptクライアントのライブラリで構成されている｡

最小構成のプログラムを以下に示します｡

# 初期化

expressを使うと以下のようになる｡

```javascript
const app = require("express")()
const httpServer = require("http").createServer(app)
const options = {}
const io = require("socket.io")(httpServer, options)

io.on("connection", socket => {})

httpServer.listen(3000)
```

# 初期化オプション

- path

デフォルトは`/socket.io/`｡WebSocketが受け取るサーバーのURLを表している｡

Server

```javascript
const httpServer = require("http").createServer()
const io = require("socket.io")(httpServer, {
    path: "/my-custom-path/"
})
```

Client

```javascript
import { io } from "socket.io-client"

const socket = io("https://example.com", {
    path: "/my-custom-path/"
})
```

[詳細](https://socket.io/docs/v3/server-initialization/)

# Nodemon

`node app.js`の代わりに`nodemon app.js`とすることで､`app.js`が更新されるたびに自動的に実行し直してくれる｡

# 最小構成の説明

Socket.ioを使ったサーバー側の最小構成は以下の通りである｡

```javascript
var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on("connection", (socket) => {
    console.log("A user connected")

    socket.on("disconnect", () => {
        console.log("A user disconnected")
    })
})

http.listen(3000, () => {
    console.log(`Listening on *:3000`)
})
```

`require("socket.io")(http)`はsocket.ioのインスタンスをhttpサーバーにつけている｡`io.on`はイベントハンドラーの登録を行っている｡ここでは`connection`イベントと`disconnection`イベントの処理を行っている｡このイベントはクライアント側でsocket.ioのインスタンスが生成されたときとタブが閉じられたときに発生する｡この様子はクライアント側で以下のJavaScriptが実行されたときに発生する｡

```html
<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io()
</script>
```

# イベント処理

socket.ioはユーザーが定義したイベントの他に事前に登録されているイベントが存在する｡このイベントはサーバーサイドとクライアンサイドで内容が異なる｡

1. サーバーサイド

サーバーサイドで事前に用意されているイベントは以下の通りである｡

- connect
- message
- disconnect
- reconnect
- ping
- join and
- leave

2. クライアントサイド

クライアントサイドで事前に用意されているイベントは以下の通りである｡

- connect
- connect_error
- connect_timeout
- reconnect
- etc...

3. example
