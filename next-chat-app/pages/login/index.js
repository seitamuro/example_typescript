import { useState } from "react"
import Router from "next/router"

import {
    Center,
    Input,
    Button,
    FormLabel,
    FormControl,
    Flex,
    Spacer,
} from "@chakra-ui/react"
import axios from "axios"
import router from "next/router"
import { useCookies } from "react-cookie"

// loginデータをポストする
const doLogin = (username, password, setCookie) => {
    console.log(`username: ${username} password: ${password}`)
    axios.post("http://localhost:3001/login", {username: username, password: password})
    .then(res => {
        console.log(`${res.data}`)
        setCookie("login_id", res.data)
    })
    .catch(err => {
        console.log(`${err.message}`)
    })
}

// ログイン画面を生成するコンポーネント
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [cookie, setCookie, removeCookie] = useCookies()

    return (
        <Center m="3">
            <FormControl p="15px" borderWidth="1px" w="60%">
                <Center>
                    <FormLabel fontSize="4xl">ログイン</FormLabel>
                </Center>
                <FormLabel>ユーザー名:</FormLabel>
                <Input placeholder="ユーザー名" onChange={e => setUsername(e.target.value)}/>
                <FormLabel pt="10px">パスワード:</FormLabel>
                <Input placeholder="パスワード" onChange={e => setPassword(e.target.value)}/>
                <Flex w="100%" pt="20px">
                    <Button onClick={() => doLogin(username, password, setCookie)}>ログイン</Button>
                    <Spacer />
                    <Button onClick={() => Router.push("/")}>戻る</Button>
                </Flex>
            </FormControl>
        </Center>
    )
}

export default Login