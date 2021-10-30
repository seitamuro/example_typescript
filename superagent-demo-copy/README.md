# はじめに

SuperAgentのデモです｡

# 動作環境

Windows11上でdocker-composeを利用しています｡

# SuperAgentとは

非同期通信を行う場合､jQueryのajaxが使われます｡しかし､ReactやVue.jsなどのフレームワークを使う場合､DOMを直接操作することは推奨されません｡そのため､jQueryのajaxのみを使うということがあります｡しかし､jQueryの他の機能を利用しないのであれば､これらを切り離したものが欲しくなります｡これがSuperAgentです｡

# リポジトリで行ったこと

1. Reactのプロジェクトを作成

```
npx create-react-app react-app
cd react-app
```

フロントエンドの処理を行うReactのプロジェクトを作成します｡

2. SuperAgentのインストール

```
npm install superagent --save
```

非同期通信を行うためのライブラリであるSuperAgentをインストールします｡

3. コンポーネントの用意

react-app/srcにユーザーデータを表示するコンポーネントとユーザーを登録するコンポーネントを追加する｡

4. Next.jsのプロジェクトを用意する

```
cd ../
npx create-next-app next-app
```

バッグエンドの処理を行うプロジェクトを用意する｡

5. データベースを用意する

docker-compose.ymlにデータベースを定義し､データベースを作成します｡作成後､localhost:80からusersテーブルを作成します｡


# 参考文献

https://qiita.com/kuniken/items/bc20fd1e907d91b641d6