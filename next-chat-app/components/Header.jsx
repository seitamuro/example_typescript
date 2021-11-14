import { useEffect, useState } from "react"
import Router from "next/router"
import { useCookies } from "react-cookie"

import {
    Flex,
    Center,
    Text,
    Spacer,
    HStack,
    Button,
} from "@chakra-ui/react"
import axios from "axios"

// ログインページへ飛ぶ
const goLoginPage = () => {
  Router.push("/login")
}

// 新規登録ページへ飛ぶ
const goRegisterPage = () => {
  Router.push("/register")
}

// ログインボタンと登録ボタンを表示
const LoginButtons = () => {
    return (
        <HStack>
        <Button onClick={goLoginPage}>ログイン</Button>
        <Button onClick={goRegisterPage}>新規登録</Button>
        </HStack>
    )
}

// ユーザーメニューを表示
const UserButton = (props) => {
    return (
        <Button>{props.children}</Button>
    )
}

// ログアウト
const doLogout = (remover) => {
}

const Header = () => {
    const [cookie] = useCookies()
    const [username, setUsername] = useState("")

    useEffect(() => {
        console.log(`${cookie.login_id}`)
        axios
            .create({withCredentials: true})
            .post("http://localhost:3001/getUsername")
            .then(res => {
                console.log(`${res.data}`)
                setUsername(`${res.data}`)
            })
            .catch(err => {
                console.log(`${err.message}`)
            })
    }, [cookie.login_id])

    return (
      <Flex bg="green.500" h="100px">
        <Center pl="3">
          <Text fontSize="3xl" color="white">Chat App</Text>
        </Center>
        <Spacer />
        <Center pr="3">
            {
                username
                ? <UserButton>{username}</UserButton>
                : <LoginButtons />
            }
        </Center>
      </Flex>
    )
}

export { Header }