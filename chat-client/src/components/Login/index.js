import { useContext, useEffect } from "react"
import { SocketContext } from "../../socketContext"
import { MainContext } from "../../mainContext"
import { useHistory } from "react-router-dom"
import { useToast, Flex, Heading, IconButton, Input } from "@chakra-ui/react"
import { UsersContext } from "../../usersContext"
import { RiArrowRightLine } from "react-icons/ri"

const Login = () => {
    const socket = useContext(SocketContext)
    const { name, setName, room, setRoom } = useContext(MainContext)
    const history = useHistory()
    const toast = useToast()
    const { setUsers } = useContext(UsersContext)

    useEffect(() => {
        socket.on("users", users => {
            setUsers(users)
        })
    })

    const handleClick = () => {
        socket.emit("login", {name, room}, error => {
            if (error) {
                console.log(error)
                return toast({
                    position: "top",
                    title: "Error",
                    description: error,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
            }
            history.push("/chat")
            return toast({
                position: "top",
                title: "Hey there",
                description: `Welcome to ${room}`,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        })
    }

    return (
        <Flex className="login" flexDirection="column" mb="8">
            <Heading as="h1" size="4x1" textAlign="center" mb="8" fontFamily="DM Sans" fontWeight="600" letterSpacing="-2px">Cattor.io</Heading>
            <Flex className="form" gap="1rem" flexDirection={{ base: "column", md: "row"}}>
                <Input variant="filled" mr={{ base: "0", md: "4" }} mb={{ base: "4", md: "0"}} type="text" placeholder="User Name" value={name} onChange={e => setName(e.target.value)} />
                <Input variant="filled" mr={{ base: "0", md: "4" }} mb={{ base: "4", md: "0"}} type="text" placeholder="Room Name" value={room} onChange={e => setRoom(e.target.value)} />
                <IconButton colorScheme="blue" isRound="true" icon={<RiArrowRightLine />} onClick={handleClick}></IconButton>
            </Flex>
        </Flex>
    )
}

export default Login