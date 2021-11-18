# インストール

事前に以下のコマンドを実行している｡

```
npm i jest axios
```

# Babelのインストール

デフォルトのJavaScriptコンパイラは`import`によるモジュールのインポートをサポートしていない｡
そのため､`package.json`で`"type": "module"`を指定しても､`**.spec.js`内で`import`を利用できない｡
これに対処するためにBabelのインストールと設定を行う｡

はじめにBabelのインストールをおこなう｡

```
npm i babel-jest @babel/core @babel/preset-env
```

インストール後､Babelの設定を行う｡Babelの設定は`.babelrc`に書く｡

```
{
    "presets": [
        [
            "@babel/preset-env", {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
}
```

# テスト対象のプログラム

`https://jsonplaceholder.typicode.com`からユーザーの情報を取り寄せ､その結果を返す関数である`fetchUsers`を定義している｡

```javascript
import axios from "axios"

export const BASE_URL = "https://jsonplaceholder.typicode.com"

export const fetchUsers = async () => {
    try {
        return await axios.get(`${BASE_URL}/users`)
    } catch (e) {
        return []
    }
}
```

取得に成功すれば､ユーザーのリストを､失敗すれば空のリストを返す｡

# jest.mock()

`jest.mock()`を使ってテストを行う方法を以下に示す｡

```javascript
import axios from "axios"

import { BASE_URL, fetchUsers } from "./utils"

jest.mock("axios")

describe("fetchUsers", () => {
    describe("when API call is successful", () => {
        it("should return users list", () => {
            const users = [
                { id: 1, name: "John" },
                { id: 2, name: "Andrew"}
            ]
            axios.get.mockResolvedValueOnce(users)

            const result = await fetchUsers()

            expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`)
            expect(result).toEqual(users)
        })
    })

    describe("when API call fails", () => {
        it("should return empty users list.", () => {
            const message = "Network Error"
            axios.get.mockResolvedValueOnce(new Error(message))

            const result = await fetchUsers()

            expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`)
            expect(result).toEqual()
        })
    })
})
```

上記のプログラムは要点は以下のとおりである｡

1. jest.mock("axios")

axiosをモックで使用することを宣言している｡

2. axios.get.mockResolvedValueOnce(users)

axiosが次に`get`関数で値を取得しようとしたときに､`users`を返すように指定している｡

postのテストを行う場合は`axios.post.mockResolvedValueOnce`を利用する｡

# jest-mock-axios

`jest-mock-axios`を使うことでmockingを行う｡

```
npm i jest-mock-axios
```

つぎに`__mocks__`フォルダを作る｡

```
mkdir __mocks__
```

`__mocks__`フォルダ内に`axios.js`ファイルを作り､以下のように書く｡

```javascript
import mockAxios from "jest-mock-axios"

export default mockAxios
```

`__tests__\utils.spec.js`は以下のように書く｡

```javascript
import mockAxios from "jest-mock-axios"

import { BASE_URL, fetchUsers } from "./utils"

jest.mock("axios")

describe("fetchUsers", () => {
    afterEach(() => {
        mockAxios.reset()
    })

    describe("when API call is successful", () => {
        it("should return users list", () => {
            const users = [
                { id: 1, name: "John" },
                { id: 2, name: "Andrew"}
            ]
            axios.get.mockResolvedValueOnce(users)

            const result = await fetchUsers()

            expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`)
            expect(result).toEqual(users)
        })
    })

    describe("when API call fails", () => {
        it("should return empty users list.", () => {
            const message = "Network Error"
            axios.get.mockResolvedValueOnce(new Error(message))

            const result = await fetchUsers()

            expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`)
            expect(result).toEqual([])
        })
    })
})
```

1. afterEach

axiosオブジェクトが呼ばれるたびに行われる処理の内容を記述するための関数｡逆に､axiosオブジェクトが呼ばれる前に毎回行いたい処理は`beforeEach`関数の中で定義する｡

2. mockAxios.get.mockResolvedValueOne

getされたときに返す値をセットする｡

# axios-mock-adapter

以下のコマンドを実行し､`axios-mock-adapter`をインストールする｡

```
npm i axios-mock-adapter
```

`utils.spec.js`を以下のように書く｡

```javascript
import axios from "axios"
import MockAdapter from "axios-mock-adapter"

import { BASE_URL, fetchUsers } from "../utils"

describe("fetchUsers", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.reset()
    })

    describe("when API call is successful", () => {
        it("should return users list", async () => {
            const users = [
                { id: 1, name: "John" },
                { id: 2, name: "Andrew" },
            ]
            mock.onGet(`${BASE_URL}/users`).reply(200, users)

            const result = await fetchUsers()

            expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`)
            expect(result.data).toEqual(users)
        })
    })

    describe("when API call fails", () => {
        it("should return empty users list", async () => {
            mock.onGet(`${BASE_URL}/users`).networkErrorOnce()

            const result = await fetchUsers()

            expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`)
            expect(result).toEqual([])
        })
    })
})
```

以下の内容を行っている｡

1. axiosのインスタンスをMock Adapterで上書きしている｡

`new MockAdapter(axios)`により､axiosのインスタンスをMock Adapterにしている｡

2. getで`${BASE_URL}/users`にアクセスされたときに返す値を設定している｡

`.onGet`関数を利用して次に`axios.get`でアクセスされたときに返す値を指定している｡