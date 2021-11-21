import React, { useState, useEffect } from 'react';

import {
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

function App() {
  const [count, setCount] = useState(0)

  const Increment = () => setCount(prevState => prevState + 1)
  const Decrement = () => setCount(prevState => prevState - 1)

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
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Email</Th>
          </Tr>
        </Thead>
        <Tbody color="black">
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
          </Tr>
        </Tbody>
      </Table>
    </Center>
    </>
  );
}

export default App;
