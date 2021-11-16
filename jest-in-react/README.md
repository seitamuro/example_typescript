# Jest in React

JestとはJavaScript用のテストライブラリである｡JestはFacebookのエンジニアによって開発されている｡
Reactも同様にFacebookのエンジニアが開発したJavaScriptライブラリであり､連携が容易である｡
そのため､`npx create-react-app`のテストモジュールもJestを使うことを推奨している｡

このプロジェクトではJestをReact内でどのように使うのかを説明する｡

# セットアップ

Jestはユニットテストの機能のみを提供している｡ReactはMVC(Model-View-Controller)のうち､Viewを担当しているため､
Jest単体の提供する機能だけではテストを行うことができない｡これを解消する機能が **Snapshot testing** である｡

この機能は正常なレンダリング結果のスクリーンショットとレンダリング結果を比較することでテストをするテストである｡
このテストを行うには`react-test-runner`をインストールする必要がある｡

```
npm i react-test-renderer --save-dev
```

テストは`src/__tests__`フォルダ内に書く｡

```
mkdir -p src/__tests__
```

# テストケースの書き方の例

Snapshot testingためには`src/__tests__/Button.spec.js`に以下のように記述する必要がある｡

```javascript:Button.spec.js
import React from "react"
import { create } from "react-test-renderer"

describe("Button component", () => {
    test("Matches the snapshot", () => {
        const button = create(<Button />)
        expect(button.toJSON()).toMatchSnapshot()
    })
})
```

# Snapshot testing の流れ

`react-test-renderer`は`toMatchSnapshot`関数を提供している｡
Snapshot testingは実際のDOMを生成してテストを行うのではなく､JavaScriptオブジェクトとの
スナップショットを比較をしている｡`react-test-renderer`はReact ComponentをJavaScriptオブジェクトに
変換するためのライブラリである｡

`toMatchSnapshot`関数は以下のような動作をする｡

1. 初めて実行されたとき､スナップショットを作成する｡
2. 保存されたスナップショットが存在すればそれと比較する｡

そのため､頻繁にUIが変更される場合はSnapshot testingは避けたほうがよい｡

# React componentの動作チェック

以下のような`Button`コンポーネントがあるとする｡

```javascript
<button onClick={this.handleClick}>
    {props.text}
</button>
```

このようなオブジェクトがユーザーにクリックされたときの動作のテストを行うとする｡
このとき､テストは､以下のようにボタンを取得して行う｡

```javascript
const component = create(<Button text="SUBSCRIBE TO BASIC" />)
const instance = component.root
const button = instance.findByType("button")

button.props.onClick()
button.props.children
```

# Mocking

**Mocking** とは関数やAPIの動作を擬似的に行うためのテストパターンの1つである｡
テストを行うときに､必ずしもAPIサーバーが正常に動作する､または､望んだフォーマットで応答するとは限らない｡
これを解決するために利用するのが**Mocking**である｡
