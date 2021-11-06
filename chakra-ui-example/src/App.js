import { Box, Grid, VStack, Text, Code, Link, Flex, Button, SimpleGrid } from "@chakra-ui/react"

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo"

function App() {
  return (
    <>
      <Box textAlign="center" fontSize="x1">
        <Grid minH="100vh" p="3">
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="x1">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
              >
                Learn Chakra
            </Link>
          </VStack>

          <VStack>
            <Box m="2" backgroundColor="tomato">Tomato</Box>
            <Box maxW="960px" mx="auto" backgroundColor="yellowgreen">mx=auto</Box>
            <Box m={[2, 3]} backgroundColor="twitter.500">m=[2, 3]</Box>
            <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)" />
            <Box w="100%" h="200px" bgGradient="radial(gray.300, yellow.400, pink.200)" />
            <Text
              bgGradient="linear(to-l, #7929CA, #FF0080)"
              bgClip="text"
              fontSize="6xl"
              fontWight="extrabold">
                Welcome to Chakra UI
              </Text>
              <Text fontSize="md">Welcome to Chakra UI</Text>
              <Text fontSize="32">Welcome to Chakra UI</Text>
              <Text fontSize="2em">Welcome to Chakra UI</Text>
              <Text textAlign={["left", "center"]}>Welcome to Chakra UI</Text>
              <Box width="100%" height="32" backgroundColor="violet"></Box>
              <Box w="100%" h="32px" backgroundColor="whatsapp.500"></Box>
              <Box boxSize="sm" backgroundColor="yellow.500"/>

          </VStack>
        </Grid>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          Box with Flex props
        </Box>

        <Flex align="center" justify="center">
          Flex Container
        </Flex>

        <Box display="grid" gridGap="2" gridAutoFlow="row dense">
          Grid
        </Box>

        <Grid gap="2" autoFlow="row dense">
          Grid
        </Grid>

        <VStack>
          <Box border="1px" borderColor="gray.200">
            Card
          </Box>

        </VStack>
        <Button borderRightRadius="0">Button 1</Button>
        <Button borderLeftRadius="0">Button 2</Button>
        <Button borderTopRadius="md">Button 2</Button>

        <Box position="absolute">Cover</Box>

        <Box pos="absolute" top="0" left="0">Absolute with top and left</Box>
        <Box pos="fixed" w="100%" zIndex="2">
          Fixed with zIndex
        </Box>

      </Box>

      <SimpleGrid
        bg="gray.50"
        columns={{ sm: 2, md: 4 }}
        spacing="8"
        p="10"
        textAlign="center"
        rounded="lg"
        color="gray.400"
      >
        <Box boxShadow="xs" p="6" rounded="md" bg="white">xs</Box>
        <Box boxShadow="sm" p="6" rounded="md" bg="white">sm</Box>
        <Box boxShadow="base" p="6" rounded="md" bg="white">Base</Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">md</Box>
        <Box boxShadow="2xl" p="6" rounded="md" bg="white">2xl</Box>
        <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">dark-lg</Box>
        <Box boxShadow="outline" p="6" rounded="md" bg="white">outline</Box>
        <Box boxShadow="inner" p="6" rounded="md" bg="white">inner</Box>
      </SimpleGrid>

      <Text textShadow="1px 1px #ff0000" m="6">Text with shdows</Text>

      <Button 
        colorScheme="teal"
        _hover={{
          background: "white",
          color: "teal.500",
        }}
      >
        Hover me!
      </Button>

      <Box
        role="group"
      >
        <Box
          _hover={{ fontWeight: "semibold" }}
          _groupHover={{ color: "tomato" }}
        >??</Box>
      </Box>

    </>
  );
}

export default App;
