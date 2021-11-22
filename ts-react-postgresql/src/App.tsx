import React, { useState, useEffect } from 'react';

import {
  Input,
  Text,
  Center,
  Button,
  HStack,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Flex,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"
import axios  from "axios"
import { DeleteIcon, AddIcon } from "@chakra-ui/icons"

type User = {
  user_id: number,
  username: string,
  email: string
}

const getUsers = (callback: (data: (prevState: User[]) => User[]) => void) => {
  axios.get("http://localhost:3001/users")
    .then(res => {
      callback(res.data)
    })
    .catch(err => {
      callback([] as any)
    })
}

const postUser = (username: string, email: string) => {
  const data = {
    "username": username,
    "email": email
  }
  axios.post("http://localhost:3001/newuser", data)
    .then(res => console.log(`${res}`))
    .catch(e => console.log(e.stack))
}

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[]>([])
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const Increment = () => setCount(prevState => prevState + 1)
  const Decrement = () => setCount(prevState => prevState - 1)

  const deleteUser = (user_id: number) => { console.log(`delete ${user_id}`) }

  const changeUsername = (newname: string) => {
    setUsername(newname)
  }
  const changeEmail = (newemail: string) => {
    setEmail(newemail)
  }

  useEffect(() => {
    getUsers(setUsers)
  }, [setUsers])

  return (
    <>
    <Center>
      <HStack>
        <Button onClick={Increment}>+</Button>
        <Box h="100px" w="100px" bg="red.100" as="button">{count}</Box>
        <Button onClick={Decrement}>-</Button>
      </HStack>
    </Center>

    <Center color="gray.100" borderRadius="10px" border="1px" p="10px" m="10px">
      <Table variant="simple" size="sm">
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody color="black">
          {users.map((user, key) => {
            return (
              <Tr key={key}>
                <Td>{user.username}</Td>
                <Td>{user.email}</Td>
                <Td><DeleteIcon border="1px" p="2px" w="25px" h="25px" color="red.500" borderRadius="4px" onClick={() => deleteUser(key)} /></Td>
              </Tr>
            )
          })}
          <Tr key="-1">
            <Td><Input placeholder="Username" onChange={e => changeUsername(e.target.value)} /></Td>
            <Td><Input placeholder="Email" onChange={e => changeEmail(e.target.value)} /></Td>
            <Td><AddIcon color="green.600" w="25px" h="25px" p="2px" onClick={() => postUser(username, email)} /></Td>
          </Tr>
        </Tbody>
      </Table>
    </Center>
    </>
  );
}

export default App;
