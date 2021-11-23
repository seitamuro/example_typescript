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
} from "@chakra-ui/react"

function App() {
  const [users, setUsers] = useState([
    {
      username: "user1",
      age: 10,
      email: "user1@mail.com"
    }
  ])

  return (
    <Center>
      <Table variant="simple" w="60%" border="1px" borderColor="gray.100" borderRadius="md">
        <Thead>
          <Tr>
            <Th>ユーザー名</Th>
            <Th>年齢</Th>
            <Th>メールアドレス</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((i, key) => (
            <Tr>
              <Td>{i.username}</Td>
              <Td>{i.age}</Td>
              <Td>{i.email}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Center>
  );
}

export default App;
