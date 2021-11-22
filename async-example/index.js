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

    console.log("hello")
}

concurrentStart()