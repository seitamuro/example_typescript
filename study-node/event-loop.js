var events = require("events")

var eventEmitter = new events.EventEmitter()

var connectHandler = () => {
    console.log("connection successful.")

    eventEmitter.emit("data_received")
}

eventEmitter.on("connection", connectHandler)

eventEmitter.on("data_received", () => {
    console.log("data received successfully.")
})

eventEmitter.emit("connection")

console.log("Program Ended.")