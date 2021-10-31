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

# REPL 

REPLはRad Eval Print Loopの略称｡REPLは以下の機能を持つ｡

- Read - ユーザーの入力を読み､JavaScriptのデータ構造に落とし込み､記憶する｡
- Eval - データ構造を受け取り､評価する｡
- Print - 結果を表示する｡
- Loop - ユーザーが`Ctrl+C`を押すまでループする｡

nodeコマンドを実行すると上記のようなREPLアプリケーションが実行される｡四則演算などのJavaScriptの構文を実行することができる｡

# NPM

NPMはNode Package Managerの略称｡NPMは以下の機能を提供する｡

- node.jsパッケージ/モジュールのリポジトリ
- コマンドライン上でパッケージと依存関係を管理

パッケージのインストールは以下のようにする｡

```
npm install <Module Name>
```

インストールにはグローバルのものとローカルなものが存在する｡-gオプションをつけなければローカルにインストールされる｡

モジュールの作成は

```
npm init
```

で行う｡これでpackage.jsonが生成される｡ここに依存関係などが書き込まれる｡生成したモジュールは以下のコマンドでnpm installでインストールできるようになる｡

```
npm publish
```

# BlockingとNon-Blocking

下記のようなテキストファイルを用意する｡

```
This is test text. This text was written for understanding difference between Blocking and Non-Blocking.
```

このファイルをBlockingで読み込むプログラムを以下に示す｡

```
var fs = require("fs)
var data = fs.readFileSync("input.txt")

console.log(data.toString())
console.log("Program Ended")
```

Non-Blockingで読み込むプログラムを以下に示す｡

```
var fs = require("fs")

fs.readFile("input.txt", (err, data) => {
    if (err) {
        return console.error(err)
    } else {
        console.log(data.toString())
    }
})

console.log("Program Ended")
```

上記の例の場合､ファイルの内容のあとにProgram Endedが表示され､後の場合､Program Endedのあとにファイルの内容が表示される｡Non-Blockingの場合､処理内容はコールバック関数を利用する｡

# Event Loop

Node.jsはシングルスレッドアプリケーションでありながら､eventとcallbackを利用することで非同期処理を可能にしている｡このためにasync関数を使っています｡

Node.jsはEventEmitterからEventを受け取り､その内容に対応したcallback関数が非同期的に呼び出される｡これらは以下のプログラムで実行することができる｡

```javascript
// eventsモジュールのimport
var events = require("events")

// eventEmitterオブジェクトを生成
var eventEmitter = new events.EventEmitter()

// eventとそのコールバック関数の結びつけ
eventEmitter.on("eventName", eventHandler)

// eventを生成する
eventEmitter.emit("eventName")
```

具体的な例を以下に示す｡

```javascript
var events = require("events")

var eventEmitter = new events.EventEmitter()

var connectHandler = () => {
    console.log("connection successful.")

    eventEmitter.emit("data_received")
}

eventEmitter.on("connection", connectHandler)

eventEmitter.on("data_received", () => {
    console.log("data received successfully.")
})

eventEmitter.emit("connection")

console.log("Program Ended.")
```

上記の例は

```
node event-loop.js
```

で実行することができる｡

# Event Emitter

EventEmitterインスタンスの持つかくメソッドについて述べる｡

1. addListener(event, listener)

特定のイベントのlistenerの配列の最後に追加する｡同一のlistenerがすでに追加されているかは確認しない｡

2. on(event, listener)

addListenerと同じ｡

3. once(event, listener)

次にeventが発生したときのみlistenerを呼び出す｡このlistenerは一度だけ呼び出される｡

4. removeListener(event, listener)

指定されたlistenerを削除する｡このlistenerが複数回追加されたものであれば､複数回呼び出す必要がある｡

5. removeAllListeners([event])

指定されたeventのlistenerをすべて削除する｡

6. setMaxListeners(n)

デフォルトでは10個以上のlistenerがつけられた場合､警告が出る｡この関数を利用することで､この警告が出るまでの個数を指定することができる｡

7. listeners(event)

eventのlistenerのリストを返す｡

8. emit(event, [arg1], [arg2], [...])

引数と一緒にeventを発生させる｡

# 参考文献
https://www.tutorialspoint.com/nodejs/index.htm