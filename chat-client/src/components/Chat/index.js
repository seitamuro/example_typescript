import { useContext, useState, useEffect } from "react"
import { MainContext } from "../../mainContext"
import { SocketContext } from "../../socketContext"
import { UsersContext } from "../../usersContext"
import { useHistory } from "react-router-dom"
import { useToast, Box, Flex, Heading, Menu, Button, Text, MenuButton, IconButton, MenuList, MenuItem } from "@chakra-ui/react"
import { FiList } from "react-icons/fi"
import { RiLogoutBoxFill } from "react-icons/ri"

export default function Chat() {
    const { name, room, setName, setRoom } = useContext(MainContext)
    const socket = useContext(SocketContext)
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const { users } = useContext(UsersContext)
    const history = useHistory()
    const toast = useToast()

    const logout = () => {
        setName("")
        setRoom("")
        history.push("/")
        history.go(0)
    }

    const handleSendMessage = () => {
        socket.emit("sendMessage", message, () => setMessage(""))
        setMessage("")
    }

    useEffect(() => {
        socket.on("message", msg => {
            setMessages(messages => [...messages, msg])
        })

        socket.on("notification", notif => {
            toast({
                position: "top",
                title: notif?.title,
                description: notif?.description,
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        })
    }, [socket, toast])

    window.onpopstate = e => logout()

    return(
        <Flex className="room" flexDirection="column" width={{ base: "100%", sm: "575px" }} height={{ base: "100%", sm: "auto" }}>
            <Heading className="heading" as="h4" bg="white" p="1rem 1.5rem" borderRadius="10px 10px 0 0">
                <Flex alignItems="center" justifyContent="space-between">
                    <Menu >
                        <MenuButton as={IconButton} icon={<FiList />} isRound="true" bg="blue.300" color="white" />
                        <MenuList>
                            {
                                users && users.map(user => {
                                    return (
                                        <MenuItem minH="40px" key={user.id}>
                                            <Text fontSize="sm">{user.name}</Text>
                                        </MenuItem>
                                    )
                                })
                            }
                        </MenuList>
                    </Menu>
                    <Flex alignItems="center" flexDirection="column" flex={{ base: "1", sm: "auto" }}>
                        <Heading fontSize="lg">{room.slice(0, 1).toUpperCase() + room.slice(1)}</Heading>
                        <Flex alignItems="center"><Text mr="1" fontWeight="400" fontSize="md" opacity=".7" letterSpacing="0">{name}<Box h={2} w={2} borderRadius="100px" bg="green.300"></Box></Text></Flex>
                    </Flex>
                    <Button color="gray.500" fontSize="sm" onClick={logout}>Logout</Button>
                </Flex>
            </Heading>
        </Flex>
    )
}