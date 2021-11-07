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
    FormControl
} from "@chakra-ui/react"

const Login = () => {
    return (
        <Center m="3">
            <FormControl p="15px" borderWidth="1px" w="60%">
                <Center>
                    <FormLabel fontSize="4xl">ログイン</FormLabel>
                </Center>
                <FormLabel>ユーザー名:</FormLabel>
                <Input placeholder="ユーザー名" />
                <FormLabel pt="10px">パスワード:</FormLabel>
                <Input placeholder="パスワード" />
                <Flex w="100%" pt="20px">
                    <Button>ログイン</Button>
                    <Spacer />
                    <Button>戻る</Button>
                </Flex>
            </FormControl>
        </Center>
    )
}

export default Login