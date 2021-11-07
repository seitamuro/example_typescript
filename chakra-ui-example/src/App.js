import { Box, Grid, VStack, Text, Code, Link, Flex, Button, SimpleGrid } from "@chakra-ui/react"
import { AspectRatio, Image, Badge, Center, Square, Circle, HStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react"
import { FaPhoenixFramework, FaPhone, FaStar } from "react-icons/fa";

import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo"

const AirbnbExample = () => {
  const property = {
    imageUrl: "https://bit.ly/2z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angles",
    formattedPrice: "$1,900.000",
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
          >
            {property.title}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {
              Array(5)
                .fill("")
                .map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < property.rating ? "teal.500" : "gray.300"}
                  />
                ))
            }
          <Box as="span" ml="2" color="gray.600" fontSize="sn">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

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

      <AspectRatio maxW="560px" ratio="1" backgroundColor="gray.600">
        <iframe
          title="naruto"
          src="https://www.youtube.com/embed/QhBnZ6NPOY0"
          allowFullScreen
        />
      </AspectRatio>

      <AspectRatio maxW="400px" ratio={4 / 3}>
        <Image src="https://bit.ly/naruto-sage" alt="naruto" objectFit="cover" />
      </AspectRatio>

      <AspectRatio ratio={16 / 9}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
          alt="demo"
        />
      </AspectRatio>

      <Box bg="tomato" w="100%" p="4" color="white">
        This is the Box
      </Box>

      <AirbnbExample />

      <Center bg="tomato" h="100px" color="white">
        This is the Center
      </Center>

      <HStack>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <FaPhone />
        </Center>
        <Center w="40px" h="40px" bg="tomato" color="white">
          <Box as="span" fontWeight="bold" fontSize="lg">
            1
          </Box>
        </Center>
      </HStack>

      <HStack>
        <Circle size="40px" bg="tomato" color="white">
          <FaPhone />
        </Circle>
        <Square size="40px" bg="purple.700" color="white">
          <FaPhone />
        </Square>
      </HStack>

      <Container>
        There are many benefits to a joint design and development system. Not only
        does it bring benefits to the design team, but it also brings benefits to
        engineering teams. It makes sure that our experiences have a consistent look
        and feel, not just in our design specs, but in production
      </Container>

      <Container maxW="xl" centerContent>
        <Box padding="4" bg="gray.100" max="3xl">
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team.
        </Box>
      </Container>
    </>
  );
}

export default App;
