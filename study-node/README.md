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