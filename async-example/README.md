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

# 非同期実行

下記の例では､同時に`starting slow promise`と`starting fast promise`が表示され､一秒後に`fast promise is done`､二秒後に`slow`と`slow promise is done`､`fast promise is done`と表示される｡これは､プログラム上では､resolveAfter2Secondsの戻り値が先に表示するようになっているが､非同期的にslowの表示とfastの表示が行われているため､fastの内容が先に表示される｡

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

async function concurrentStart() {
    console.log("== CONCURRENT START with await ==")
    const slow = resolveAfter2Seconds()
    const fast = resolveAfter1Second()

    console.log(await slow)
    console.log(await fast)
}

concurrentStart()
```

# 並列実行

通常`await`をつけると､つけられたPromiseの処理が終了するまで処理の終了を待つ｡しかし､`Promise.all`を使うことで､両方の処理を同時に実行することができる｡

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

async function parallel() {
    console.log("== PARALLEL with await Promise.all ==")

    await Promise.all([
        (async() => console.log(await resolveAfter2Seconds()))(),
        (async() => console.log(await resolveAfter1Second()))()
    ])
}

parallel()
```

# resolveとreject

promiseのresolveは以下のように行う｡

```javascript
return new Promise((resolve, reject) => {
    resolve("success!")
})
```

rejectは以下のように行う｡

```javascript
return new Promise((resolve, reject) => {
    resolve("err!!")
})
```