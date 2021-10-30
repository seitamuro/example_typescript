# Expressとは

ExpressとはNode.jsで利用できるWebアプリケーションフレームワークの一つ｡Webやモバイルアプリケーションの開発に必要な機能を提供する｡
主に

- HTTPリクエストに返答するためのミドルウェア
- HTTPとURLに従ってルーティング
- テンプレートを利用したHTMLページのレンダリング

を行う｡

# Expressのインストール

```
npm install express
npm install body-parser cookie-parser multer
```

Expressとそのほか必要なライブラリをインストールする｡

- body-parser - JSON､生データ､テキスト､URLを取得するためのもの
- cookie-parser - クッキーを操作するためのもの
- multer - フォームを扱うためのもの

# Hello World

簡単なサーバーを作成する｡server.jsに以下の内容を書き込む｡

```
var express = require("express")
var app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

var server = app.listen(8081, () => {
    var host = server.address().address
    var port = server.address().port

    console.log(`Example app listening at http://${host}:${port}`)
})
```

その後､

```
node server.js
```

を実行することで､サーバーを立ち上げることができる｡localhost:8081にアクセスすることで`Hello World`というレスポンスを取得することができる｡