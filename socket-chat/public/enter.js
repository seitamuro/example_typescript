// User's room and username
var room
var username

// インスタンスの生成
const socket = io()

// エラーを表示
socket.on("error", (msg) => {
    $("#error-container").html(msg)
})

// チャットルームへ移動
socket.on("chat", (data) => {
    $("body").html(data.html)
    $("#room").html(room)

    data.messages.map((msg, i) => {
        $("#message").append(`<b>${msg.username} </b><p style="display: inline;">${msg.message}</p><br>`)
    })
})

// ウェルカムメッセージ
socket.on("entering-new-user", newuser => {
    $("#message").append(`<p style="display: inline;"> --- Hello ${newuser}! Welcome to ${room}! ---</p><br>`)
})

// 入室処理
const enterRoom = () => {
    room = $("input#room").val()
    username = $("input#username").val()

    socket.emit("enter-room", { username: username, room: room })
}

// メッセージを送信
const sendMessage = () => {
    var message = $("input#new-message").val()

    socket.emit("send-message", { username: username, room: room, message: message})
}

// 新規メッセージを取得
socket.on("update-message", html => {
    $("#message").append(html)
})