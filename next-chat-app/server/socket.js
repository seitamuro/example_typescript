const setupSocket = (socket) => {
    console.log("connected")

    socket.on("send-message", data => {
        console.log("message receive")
        console.log(`${data.user_id}: ${data.message}`)
    })
}

module.exports = setupSocket