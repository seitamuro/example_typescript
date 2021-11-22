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