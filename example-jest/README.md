# Jest

Javascriptのユニットテスト用のモジュール｡

# インストール

```
npm init -y
npm i jest --save-dev
```

以下を`package.json`に追加｡

```json
"scripts": {
    "test": "jest"
}
```

# 準備

テストを書くフォルダを用意する｡

```
mkdir __tests__
```

`__tests__`の中にテストを書いていく｡しきたりとして､テストを書くファイルは`[function name].spec.js`のように命名する｡

# テスト記述

テストは`filterByTerm.spec.js`に以下のようにして書く｡

```javascript
describe("Filter function", () => {
    // test stuff
})
```

`describe`関数はテストに関するものを書くための関数である｡テスト内容はすべて`describe`で囲む｡`describe`は2つの引数を取る｡
1つめは`string`型の値であり､これはなんのためのテストであるかを表す｡2つ目の引数は実際のテストを行うコールバック関数を表す｡
このコールバック関数がユニットテストの内容となる｡コールバック関数も2つの引数をとり､以下のように書く｡

```javascript
describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        // actual test
    })
})
```

コールバック関数は`test`関数で定義し､`describe`と同様に引数を取る｡ユニットテストで必要なのは入力とその出力である｡これらは以下のように書く｡

```javascript
describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            {id: 1, url: "https://www.url1.dev"},
            {id: 2, url: "https://www.url2.dev"},
            {id: 3, url: "https://www.link3.dev"},
        ]

        const output = [
            {id: 3, url: "https://www.link3.dev"}
        ]
    })
})
```

テストの実行は`expect`関数を利用して以下のように書く｡

```javascript
expect(filterByTerm(input, "link")).toEqual(output)
```

全体のコードは以下のようになる｡

```javascript
describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            {id: 1, url: "https://www.url1.dev"},
            {id: 2, url: "https://www.url2.dev"},
            {id: 3, url: "https://www.link3.dev"},
        ]

        const output = [
            {id: 3, url: "https://www.link3.dev"}
        ]

        expect(filterByTerm(input, "link")).toEqual(output)
    })
})
```

# テストの実行

テストは以下のように実行する｡

```javascript
npm test
```

以下のようにすることで結果が表にまとめて出力される｡

```javascript
npm test -- --coverage
```

`coverage`オプションは以下のように`package.json`を編集することで自動的に実行することができる｡

```json
"jest": {
    "collectCoverage": true
}
```

もしくは

```json
"scripts": {
    "test": "jest --coverage"
}
```

`coverage`オプションはコマンドライン上の表ではなくhtml上に表示することもできる｡これは以下のように`package.json`に書くことで指定することができる｡

```json
"jest": {
    "collectCoverage": true,
    "coverageReporters": ["html"]
}
```