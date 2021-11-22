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