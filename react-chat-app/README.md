# Chat app

以下の機能を実装した｡

- パスワード付きログイン
- 今までに送られたメッセージを入室時に表示
- ルーム機能
- メッセージ送信機能

# つまづいたこと

## メッセージの更新

```
messages.push(newMessage)
setMessages(messages)
```

ではすぐに再描画が行われない｡おそらく､setMessageがasyncな動作だから?ここを以下のように書き直すことですぐに画面が再描画されるようになった｡

```
setMessages(prevState => [...prevState, newMessage])
```

## ソケットの生成

`useEffect`を使ってソケットの生成を行った｡`useEffect`の戻り地はデストラクタ的な動作をするので､ここで`socket.close`を渡すようにする｡ここで生成したソケットは`props`を使って共有した｡コンテキストを使う方法のほうがいい?

```
import io from "socket.io-client"

const foo = () => {
    const [socket, setSocket] = useState(null)

    :
    :
    :

    useEffect(() => {
        const newSocket = io(URL)

        setSocket(newSocket)

        return () => newSocket.close()
    }, [setSocket])

    :
    :
    :
}
```

`socket.io-client`を使うことでソケットによる通信を行っている｡

## CORS

クライアント側でソケットの生成を行うとCORSによる通信のブロックが発生した｡これは､サーバー側で以下のようにしてsocket.ioを利用すると治った｡

```
const app = require("express")()
const http = require("http").Server(app)
const io = require("socket.io")(http, {
    cors: {
        origin: "*",
    }
})
```

## Axios

ログイン後にソケットの通信を開始している｡このとき､`axios`を使ってユーザー名とパスワードを送信している｡