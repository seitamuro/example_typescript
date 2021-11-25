import { useState } from "react"

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react"
import { DeleteIcon } from "@chakra-ui/icons"

import useUsers from "./hooks/useUsers";

function App() {
  const [users, addUser, delUser] = useUsers()

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
        </Tbody>
      </Table>
    </Center>
  );
}

export default App;
