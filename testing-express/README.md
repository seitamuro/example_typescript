# インストール

テストに必要となるパッケージをインストールする｡

```
npm install --save-dev babel-cli babel-preset-env jest supertest superagent
```

# done関数を利用したテスト

done関数を呼び出すことで､テストが終了したことを明示的に示すことができる｡

```javascript
const request = require("supertest")
const app = require("../server/app")

describe("Testing Express Server", () => {
    test("It should response the GET method", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200)
                done() // notify that it ends
            })
    })
})
```

# Promiseを利用する方法

done関数を利用する代わりに､returnを利用して返すことでもテストできる｡

```javascript
const request = require("supertest")
const app = require("../server/app")

describe("Testing Express Server", () => {
    test("It should response the GET method", () => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})
```

# awaitを使う方法

request関数はasyncな関数なので､awaitを利用しなければ値を取得できない(promiseでラップされている｡)
これに対する単純な解決法は`await`を利用して､promiseのラップを剥がすことである｡

```javascript
const request = require("supertest")
const app = require("../server/app")

describe("Testing Express Server", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
    })
})
```
