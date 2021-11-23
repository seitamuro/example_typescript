const { createServer } = require("http")
const { Server } = require("socket.io")
const Client = require("socket.io-client")
const setupHandler = require("../server/handler")

describe("Testing Express Server", () => {
    let io, clientSocket

    beforeAll((done) => {
        const httpServer = createServer()
        io = new Server(httpServer)
        httpServer.listen(() => {
            const port = httpServer.address().port
            clientSocket = new Client(`http://localhost:${port}`)
            setupHandler(io)
            clientSocket.on("connect", done)
        })
    })

    afterAll(() => {
        io.close()
        clientSocket.close()
    })

    test("connection test", (done) => {
        clientSocket.on("world", () => done())
        clientSocket.emit("hello")
    })
})