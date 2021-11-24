# How to Use jest.fn

`jest.fn()`は呼ばれた回数､呼ばれたときに渡された引数などを記録している｡加えて､これに渡した関数はmockした関数が呼ばれたときに渡される｡
この例を以下に示す｡

```javascript
function greetWorld(greetingFn) {
    return greetingFn("world")
}

test("greetWorld calls the greeting function properly", () => {
    const greetImplementation = name => `Hey, ${name}!`
    const mockFn = jest.fn(greetImplementation)
    const value = greetWorld(mockFn)

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith("world")
    expect(value).toBe("Hey, world!")
})
```

# 非同期関数の処理

jestでは､`expect`関数を利用してテストを行う｡`expect`の引数には結果やモックされた関数が渡され､`toBe`や`toEqual`などの関数を利用して､`expect`に渡された関数の結果が予想された値と同じであるかを判定することでテストしている｡

JavaScriptは非同期実行をサポートしている言語なので､テスト対象の関数などが非同期関数の場合､コールバックによる処理やPromiseを利用していることがある｡ここでは､Jestがこれらの関数にどのように対処するかを述べる｡

## コールバック

コールバック関数を利用する関数をテストする場合はdone関数を利用する｡

```javascript
test("the data is peanut butter", done => {
    function callback(data) {
        try {
            expect(data).toBe("peanut butter")
            done()
        } catch (e) {
            done(error)
        }

        fetchData(callback)
    }
})
```

done関数が呼ばれたとき､テストは終了する｡done関数が呼ばれない場合は(タイムアウトした場合)､テストが失敗し､done関数が`catch`内で呼ばれた場合､done関数の引数がエラーログとして記録される｡

## Promise

Promiseを利用する場合は単純な方法として､以下のようにしてテストを行える｡ **returnするのを忘れないようにする**

```javascript
test("the data is peanut butter", () => {
    return fetchData().then(data => {
        expect(data).toBe("peanut butter")
    })
})
```

上記はさらに省略した書き方ができる｡

```javascript
test("the data is peanut butter", () => {
    return expect(FetchData()).resolves.toBe("peanut butter")
})
```

失敗することが事前にわかっている場合は`resolves`の代わりに`rejects`を使えばいい｡

## asyncとawait

returnを省略して書く方法として`async`と`await`を利用する方法がある｡

```javascript
test("the data is peanut butter", async () => {
    const data = await fetchData()
    expect(data).toBe("peanut butter")
})

test("the fetch fails with an error", async () => {
    expect.assertions(1)
    try {
        await fetchData()
    } catch (e) { 
        expect(e).toMatch("error")
    }
})
```

ここでも`.resolves`と`.rejects`を利用できる｡

```javascript
test("the data is peanut butter", async () => {
    await expect(fetchData()).resolves.toBe("peanut butter")
})

test("the fetch fails with an error", async () => {
    await expect(fetchData()).rejects.toMatch("error")
})
```

# テストごとの準備

テストごとに事前に行わなければならない処理､事後に行わなければならない処理などがある場合がある｡例として､データベースのテストなどがある｡
これらの処理はまとめておくことができる｡

## beforeEach と afterEach

テスト毎に行わなければならない処理を書く｡

```javascript
beforeEach(() => {
    initializeCityDatabase()
})

afterEach(() => {
    clearCityDatabase()
})

test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy()
})

test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy()
})
```

`beforeEach`と`afterEach`は非同期関数を処理することもできる｡
この場合､テストと同様に処理を行うか､Promise関数をreturnする必要がある｡

# beforeAll と afterAll

テスト全体を通じて一度だけテスト前もしくはテスト後に行う処理がある場合､以下のように定義する｡

```javascript
beforeAll(() => {
    initializeCityDatabase()
})

afterAll(() => {
    clearCityDatabase()
})

test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy()
})

test("city database has San Juan", () => {
    expect(isCity("San Juan")).toBeTruthy()
})
```

## スコープ

`afterEach`や`afterAll`などの関数はスコープを持つ｡これらのテストは`describe`関数ごとにスコープを持つ｡

```javascript
beforeEach(() => { // すべてのテスト前に実行される
    return initializeCityDatabase()
})

test("city database has Vienna", () => {
    expect(isCity("Vienna")).toBeTruthy()
})

describe("matching cities to foods", () => {
    beforeEach(() => { // このdescribe内でのみ実行される
        return initializeFoodDatabase()
    })

    test("Vienna <3 veal", () => {
        expect(isValidCityFoodPair("Vienna", "Wiener Schnitzel")).toBe(true)
    })
})
```

## テストとdescribeの実行順番

以下に示したような順番で処理は行われる｡

```javascript
describe('outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');
    test('test 1', () => {
      console.log('test for describe inner 1');
      expect(true).toEqual(true);
    });
  });

  console.log('describe outer-b');

  test('test 1', () => {
    console.log('test for describe outer');
    expect(true).toEqual(true);
  });

  describe('describe inner 2', () => {
    console.log('describe inner 2');
    test('test for describe inner 2', () => {
      console.log('test for describe inner 2');
      expect(false).toEqual(false);
    });
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test for describe inner 1
// test for describe outer
// test for describe inner 2
```

# Mocking

mockを使うことで､実際に機能を実装せずにテストを行う､外部のシステムへのアクセスをせずにテストを行うなどのテストの内容の本質とは関わらない場所を省略することができます｡

mockを行う方法として､テストで使うモック関数を自分で実装する方法と､依存するモジュールの関数を上書きする方法の2つがあります｡

## モックについて

はじめに､モックの基本的な動作について述べる｡モック関数は自分の呼ばれた回数､呼ばれたときに使われた引数などを記憶している｡`forEach`のテストを行っている様子を以下に示す｡

```javascript
function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}

describe("Testing forEach function", () => {
    test("should success", () => {
        const mockCallback  = jest.fn(x => 42 + x)
        forEach([0, 1], mockCallback)

        // the number of that the mock function was called
        expect(mockCallback.mock.calls.length).toBe(2)

        // the first argument of the first call
        expect(mockCallback.mock.calls[0][0]).toBe(0)

        // the first argument of the second call
        expect(mockCallback.mock.calls[1][0]).toBe(1)

        // the return value of the first call to the function
        expect(mockCallback.mock.results[0].value).toBe(42)
    })
})
```

上記の例では､`forEach`関数にわたすコールバック関数をモック関数にし､モック関数が呼ばれた回数､渡された引数などを利用してテストを行っている｡

# 呼ばれた関数をモック関数で定義する

モック関数は返り値を定義することができる｡

```javascript
test("should success", () => {
    const myMock = jest.fn()

    expect(myMock()).toBeUndefined()

    myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true)

    expect(myMock()).toBe(10)
    expect(myMock()).toBe("x")
    expect(myMock()).toBe(true)
    expect(myMock()).toBe(true)
})
```

`.mockReturnValueOnce`を使うことで､一度だけ指定された値を返し､`.mockReturnValue`を使うことで､指定された値を返すようになる｡

# モジュールをmockingする

モジュールの特定の関数が返す値を指定することができる｡これはモジュールをmockingすることで行える｡

users.js
```javascript
const axios = require("axios")

class Users {
    static all() {
        return axios.get("/users.json").then(resp => resp.data)
    }
}

module.exports = Users
```

users.test.js
```javascript
const axios = require("axios")
const Users = require("./users")

jest.mock("axios")

test("should fetch users", () => {
    const users = [{name: "Bob"}]
    const resp = {data: users}
    axios.get.mockResolvedValue(resp)

    return Users.all().then(data => expect(data).toEqual(users))
})
```

`jest.mock`により､モジュールをmockingし､`関数名.mockResolvedValue`とすることで指定した値を戻り値として返すことができる｡

モック関数は`.mockImplementationOnce`を使うことで一時的にモック関数の動作を定義することができる｡

```javascript
const myMockFn = jest
    .fn(cb => cb("default"))
    .mockImplementationOnce(cb => cb(null, true))
    .mockImplementationOnce(cb => cb(null, false))

myMockFn((err, val) => console.log(val)) // true
myMockFn((err, val) => console.log(val)) // false
myMockFn((val) => console.log(val))      // default
```

# Tips

## 特定のテストのみを実行

`test.only`を利用することで､`only`のつけられたテストのみを実行することができる｡

```javascript
test.only("should fail", () => {
    expect(false).toBe(true)
})

test("should success", () => {
    expect(true).toBe(true)
})
```

## useEffectをもつCustom Hookのテストの仕方

Custom Hookを作成した際に､useEffect内でasynchronousな処理(axiosによるfetchなど)を行うことがある｡
この場合､テスト側で`renderHook`の`waitForNextUpdate`関数を使い､`state`の値が更新されるのを待つ必要がある｡

useFetch.js
```javascript
import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("URL_FOR_RESOURCE")
        .then(res => {setData(res.data)})
    }, [])

    return [data]
}

export default useFetch
```

useFetch.test.js
```javascript
import {renderHook} from "@testing-library/react-hooks"

import axios from "axios"

import useUsers from "./useFetch"

jest.mock("axios")

test("get users from resource", async () => {
    const response = [
        {
            "username": "user1"
        }
    ]

    axios.get.mockResolvedValue({"data": response})
    const {result, waitForNextUpdate} = renderHook(() => useFetch())
    await waitForNextUpdate()
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(result.current[0]).toEqual(answer)
})
```

ここでは､axiosをmockingしている｡その後､`waitForNextUpdate`関数を`await`しstateが
更新されるのを待ち､更新後に`useFetch`がとってきた値が`mockResolvedValue`で指定したものと
同じであるかをテストしている｡