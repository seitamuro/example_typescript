# Socket.io

WebSocketというプロトコルを利用した通信を行うモジュール｡双方向リアルタイムで通信することができる｡

# Emitter events

eventが発生させる｡eventに合わせて処理を行う｡

```javascript
socket.emit("event-name", data)
```

# Listener events

eventが発生したときに行う処理を定義する｡

```javascript
socket.on("event-name", callback(data))
```

# Rooms

サーバー側でのみ利用可能｡このルーム内にのみにイベントのemitを行うことができる｡

```javascript
socket.to("room-name").emit("event-name", data)
```

# コネクションの成立

コネクションが成立したときに`connection`イベントが発生する｡このイベントは`.on`関数で受け取ることができる｡

```javascript
io.on("connection", (socket) => {
})
```