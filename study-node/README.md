# Node.jsとは

Node.jsはサーバーサイドのプラットフォームである｡これはGoogle ChromeのJavaScriptエンジンに利用されている｡これは以下の特徴を有する｡

- 非同期かつイベント駆動 - Node.jsライブラリは非同期である｡これはこれはNode.jsがAPIからの返り値を待たないことを意味する｡
- Very Fast - Node.jsライブラリは高速実行する｡
- シングルスレッドながらスケーラブル - イベントメカニズムは非同期的なサーバーを可能にする｡
- バッファリングしない - 無駄なメモリを使わない

Node.jsは以下の用途で使われる｡

- I/O負荷アプリケーション
- データストリーミングアプリケーション
- リアルタイムデータ集中アプリケーション
- JSON APIアプリケーション
- シングルページアプリケーション

CPUに大きな負荷のかかるアプリケーションには向いていない｡

# Hello World

1. 必要なモジュールをimportする

```
var http = require("http")
```

2. サーバーを作成する

```
http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"})

    res.end("Hello World")
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081)
```

上記のプログラムでは､サーバーを作成し､8081ポートでリクエストを待ち受けている｡

3. サーバーを実行する

```
node main.js
```