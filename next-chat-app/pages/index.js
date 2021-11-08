import Router from "next/router"

import { 
  HStack,
  Text,
  Box,
  Center,
  Flex,
  Spacer,
  Button
} from "@chakra-ui/react"

// ログインページへ飛ぶ
const goLoginPage = () => {
  Router.push("/login")
}

// 新規登録ページへ飛ぶ
const goRegisterPage = () => {
  Router.push("/register")
}

export default function Home() {
  return (
    <Box>
      <Flex bg="green.500" h="100px">
        <Center pl="3">
          <Text fontSize="3xl" color="white">Chat App</Text>
        </Center>
        <Spacer />
        <Center pr="3">
          <HStack>
            <Button onClick={goLoginPage}>ログイン</Button>
            <Button onClick={goRegisterPage}>新規登録</Button>
          </HStack>
        </Center>
      </Flex>

      <Center h="400px" bg="gray.300">
        <Box>
          <Text fontSize="6xl" color="white">Message for users</Text>
        </Box>
      </Center>

      <Flex p="4">
        <Center w="30%" borderWidth="2px" borderRadius="5px" h="400">
            Feature 1
        </Center>
        <Spacer />
        <Center w="30%" borderWidth="2px" borderRadius="5px" h="400">
            Feature 2
        </Center>
        <Spacer />
        <Center w="30%" borderWidth="2px" borderRadius="5px" h="400">
            Feature 3
        </Center>
      </Flex>
    </Box>
  )
}
