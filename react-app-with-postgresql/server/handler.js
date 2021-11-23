const setupHandler = (io) => {
    io.on("connection", (socket) => {
        socket.on("db-updated")
    })
}

module.exports = setupHandler