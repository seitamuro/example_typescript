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

import { Header } from "../components/Header"

export default function Home() {
  return (
    <Box>
      <Header />
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
