# Async関数

async関数は`async`というキーワードで始まる関数である｡この関数内でのみ`await`を利用することができる｡`sync`と`await`は非同期処理を可能にし､promiseを利用した振る舞いを定義することができる｡

```javascript
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("resolved")
        }, 2000)
    })
}

async function asyncCall() {
    console.log("calling")
    const result = await resolveAfter2Seconds()
    console.log(result)
}

asyncCall()
```

上記のプログラムを実行すると､以下のように出力される｡

```
calling
resolved
```

resolvedはcallingと出力された2秒後に出力される｡

async関数の返す値は`Promise.resolve`でラップされている｡そのため､以下のような関数は

```javascript
async function foo() {
    return 1
}
```

以下のような関数と等しい｡

```javascript
function foo() {
    return Promise.resolve(1)
}
```

# 逐次的な実行

以下のプログラムは`starting slow promise`と表示された2秒後に`slow`と`slow promise is done`と表示され､その後すぐに`starting fast promise`と表示され､1秒後に`fast`と`fast promise is done`と表示される｡

```javascript
function resolveAfter2Seconds() {
    console.log("starting slow promise")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("slow")
            console.log("slow promise is done.")
        }, 2000)
    })
}

function resolveAfter1Second() {
    console.log("starting fast promise")
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("fast")
            console.log("fast promise is done")
        }, 1000)
    })
}

async function sequentialStart() {
    console.log("== SEQUENTIAL START ==")

    // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds()
    console.log(slow)

    const fast = await resolveAfter1Second()
    console.log(fast)
}

sequentialStart()
```