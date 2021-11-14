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
- message
- etc...

3. messageイベントのサンプル

サーバーサイドのプログラムを以下に示す｡

```
var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on("connection", (socket) => {
    console.log("A user connected")

    setTimeout(() => {
        socket.send("Sent a message 4seconds after connection!")
    }, 4000)

    socket.on("disconnect", () => {
        console.log("A user disconnected")
    })
})

http.listen(3000, () => {
    console.log(`Listening on *:3000`)
})
```

12行目あたりの`setTimeout(callback, ミリ秒)`で指定することができる｡ここでは"Sent a message 4seconds after connection!"というテキストを送信している｡これは`message`イベントとして処理される｡これはクライアント側で以下のスクリプトを書くことでこのテキストを受け取っている｡

```
<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io()
    socket.on("message", (data) => {
        document.write(data)
    })
</script>
```

`.on("message", callback)`で`message`イベントを処理している｡ここでは､`message`イベントで送られてきたテキストでDOMを書き換えています｡

4. ユーザー定義のイベントのサンプル

ここでは`clientEvent`というイベントを定義し､そのイベントを処理するサンプルを示す｡

サーバー側のプログラムは以下の通りである｡

```
var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

io.on("connection", (socket) => {
    console.log("A user connected")

    socket.on("clientEvent", (data) => {
        console.log(data)
    })
})

http.listen(3000, () => {
    console.log(`Listening on *:3000`)
})
```

クライアント側のプログラムを以下に示す｡

```
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>

<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io()
    socket.emit("clientEvent", "Sent an event from the client!")
</script>

<body>
    Hello World
</body>
</html>
```

`.emit(イベント名, 送信データ)`とすることでイベントを発生させることができる｡このイベントは`.on`関数で受け取ることができる｡

# Broadcast

接続しているすべてのクライアントにデータを送信することをブロードキャストという｡これをSocket.ioでやろうとすると今までのイベント駆動の方法では実現できないことわかる｡(`connection`イベントを待ち受け､そこで受け取ったsocketに対して`emit`関数でイベントを発生させるため｡)これを解決するのが`io.sockets.emit`関数を利用する方法である｡これを使えばすべてのクライアントへデータを送ることができる｡

サーバー側のプログラムを以下に示す｡

```
var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

var clients = 0

io.on("connection", (socket) => {
    clients++

    io.sockets.emit("broadcast", { description: clients + " clients connected!"})
    socket.on("disconnect", () => {
        clients--;
        io.sockets.emit("broadcast", { description: clients + " clients connected!"})
    })
})

http.listen(3000, () => {
    console.log(`Listening on *:3000`)
})
```

クライアント側のプログラムを以下に示す｡

```
<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io()
    socket.on("broadcast", (data) => {
        document.body.innerHTML = ""
        document.write(data.description)
    })
</script>
```

上記のプログラムを実行すると､クライアント側で現在接続しているクライアントの数が表示される｡


# NameSpace

NameSpaceはサーバーサイドにのみある機能である｡これを使うことで､リソースの削減やチャンネルを作成することができる｡

デフォルトのNameSpaceは`/`である｡これはNameSpaceが指定されていないときに割り当てられるものである｡このNameSpaceに割り当てられるとき､クライアント側のスクリプトは以下のようになっている｡

```javascript
var socket = io()
```

サーバーサイドでは名前空間の定義に`io.of`関数を利用する｡クライアントサイドでは特定の名前空間に接続する際に`io(NameSpace)`を利用する｡以下にその例を示す｡

サーバーサイド

```javascript
var app = require("express")()
var http = require("http").Server(app)
var io = require("socket.io")(http)

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

var nsp = io.of("/my-namespace")
var clients = 0
nsp.on("connection", (socket) => {
    clients++
    nsp.emit("hi", `Hello everyone! x ${clients}`)

    socket.on("disconnect", () => {
        clients--;
        nsp.emit("hi", `Hello everyone! x ${clients}`)
    })
})

http.listen(3000, () => {
    console.log(`Listening on *:3000`)
})
```

クライアンサイド

```javascript
<script src="/socket.io/socket.io.js"></script>
<script>
    var socket = io("/my-namespace")
    socket.on("hi", (data) => {
        document.body.innerHTML = ""
        document.write(data)
    })
</script>
```

接続されるたびに`Hello everyone! x 接続数`と表示される｡同様に､切断されるたびに接続数が更新される｡これはNameSpaceか異なれば､接続数は別のカウントを持つ｡

# Room

NameSpaceのようにソケットをグループに分け､グループごとに通信を行う機能です｡NameSpaceよりもより分割しやすいようにしてあります｡

NameSpaceと異なり､`join`関数を利用することで空間を分けています｡サーバー側のプログラムを以下に示す｡

```javascript
```

# デバッグ

サーバー側のデバッグは以下のように環境変数を設定することでログを取得することができる｡

```
DEBUG=* node app.js
```

クライアント側は以下のプログラムを書くことでログを取得することができる｡

```javascript
localStorage.debug = "*"
```