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