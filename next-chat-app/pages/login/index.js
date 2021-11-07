import { useState } from "react"
import Router from "next/router"

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

const doLogin = (username, password) => {
    console.log(`username: ${username} password: ${password}`)
}

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
                    <Button onClick={() => doLogin(username, password)}>ログイン</Button>
                    <Spacer />
                    <Button onClick={() => Router.push("/")}>戻る</Button>
                </Flex>
            </FormControl>
        </Center>
    )
}

export default Login