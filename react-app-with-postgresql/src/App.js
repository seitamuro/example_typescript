import { useRef } from "react"

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  Button,
  Input,
} from "@chakra-ui/react"
import { DeleteIcon, AddIcon } from "@chakra-ui/icons"

import useUsers from "./hooks/useUsers";

function App() {
  const [users, addUser, delUser] = useUsers()
  const username = useRef("")
  const age = useRef(0)
  const email = useRef("")

  const postNewUser = () => {
    const user = {
      "username": username.current.value,
      "age": age.current.value,
      "email": email.current.value
    }

    addUser(user)
  }

  return (
    <Center>
      <Table variant="simple" w="60%" border="1px" borderColor="gray.100" borderRadius="md">
        <Thead>
          <Tr>
            <Th>ユーザー名</Th>
            <Th>年齢</Th>
            <Th>メールアドレス</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((i, key) => (
            <Tr key={key}>
              <Td>{i.username}</Td>
              <Td>{i.age}</Td>
              <Td>{i.email}</Td>
              <Td><Button onClick={() => delUser(i.user_id)}><DeleteIcon /></Button></Td>
            </Tr>
          ))}
          <Tr key={null}>
            <Td><Input placeholder="ユーザー名" size="md" ref={username} /></Td>
            <Td><Input placeholder="年齢" size="md" ref={age} /></Td>
            <Td><Input placeholder="メールアドレス" size="md" ref={email} /></Td>
            <Td><Button onClick={postNewUser}><AddIcon /></Button></Td>
          </Tr>
        </Tbody>
      </Table>
    </Center>
  );
}

export default App;
