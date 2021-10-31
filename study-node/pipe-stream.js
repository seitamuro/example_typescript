var fs = require("fs")

var readerStream = fs.createReadStream("input.txt")

var writerStream = fs.createWriteStream("output2.txt")

readerStream.pipe(writerStream)

console.log("Program Ended")