var fs = require("fs")
const { writer } = require("repl")
var data = "Simply Easy Learning"

var writerStream = fs.createWriteStream("output.txt")

writerStream.write(data, "UTF8")

writerStream.end()

writerStream.on("finish", () => {
    console.log("Write completed.")
})

writerStream.on("error", (err) => {
    console.log(err.stack)
})

console.log("Program Ended")