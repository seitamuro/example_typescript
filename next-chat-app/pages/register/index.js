import { useState } from "react"
import router from "next/router"

import {
    Center,
    Box,
    Text,
    VStack,
    Input,
    Flex,
    Spacer,
    Button,
    HStack,
    FormLabel,
    FormControl,
    usePanGesture
} from "@chakra-ui/react"
import axios from "axios"

// loginデータをポストする
const doRegister = (username, password) => {
    axios.post("http://localhost:3001/register", {username: username, password: password})
    .then(res => {
        console.log(`${res.data}`)
        router.push("/login")
    })
    .catch(err => {
        console.log(`${err.response.data}`)
    })
}

// ログイン画面を生成するコンポーネント
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Center m="3">
            <FormControl p="15px" borderWidth="1px" w="60%">
                <Center>
                    <FormLabel fontSize="4xl">新規登録</FormLabel>
                </Center>
                <FormLabel>ユーザー名:</FormLabel>
                <Input placeholder="ユーザー名" onChange={e => setUsername(e.target.value)}/>
                <FormLabel pt="10px">パスワード:</FormLabel>
                <Input placeholder="パスワード" onChange={e => setPassword(e.target.value)}/>
                <Flex w="100%" pt="20px">
                    <Button onClick={() => doRegister(username, password)}>登録</Button>
                    <Spacer />
                    <Button onClick={() => Router.push("/")}>キャンセル</Button>
                </Flex>
            </FormControl>
        </Center>
    )
}

export default Login