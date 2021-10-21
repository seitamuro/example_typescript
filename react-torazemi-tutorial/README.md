# JSXとは

JavaScriptを拡張した言語｡HTML+JavaScript的な構文｡JSXをつかってReact要素を生成する｡JSXをつかうとHTML的な書き方ができるので見やすい+書きやすい｡
JSX->React.createElementにコンパイルされる｡

基本文法
```
import React from "react";

const BlueButton = () => {
    return (
        <button className={"btn-blue"}>
            Click me!
        </button>
    )
}

export default BlueButton;
```

1. Reactライブラリのimport
2. return文の中がJSXの構文
3. キャメルケースで記述する(ハイフンを使わない)
4. {}内で変数を扱える({}内ではJavaScriptを使える)
5. 閉じタグが必要
6. JSXはかならず階層構造(タグが2つ以上の場合はReact.Fragmentで囲むことで階層構造にする)
7. React.Fragmentで囲む
8. React.Fragmentは省略形で書ける(<>)

# Reactの環境生成

Reactの環境構築を行うツールをReactツールチェインという｡Create-react-appもその一つ｡

ファイル構造
```
src
    開発用ファイル
    ReactコンポーネントのJSXファイルなど

public
    静的ファイル(.html, .css)
    画像など

build
    本番用ファイル
    npm run buildコマンドを実行すると現れる
```

npm start: ローカルサーバーの起動｡ホットリロード対応｡
npm run build: 本番用ファイルの生成｡srcとpublicのファイルを1つにまとめる｡(バンドル)
npm run eject: BabelやWebpackの設定を変えたいときに使う｡