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