import React from "react"

import {
    Box,
    VStack
} from "@chakra-ui/react"

import { Message } from "./Message"

const Chats = (props) => {
    return (
        <VStack
            spacing="0"
            {...props}
        >
            <Box
                bg="blue.500"
                w="100%"
                h="90%"
                className="chats hideScrollBar"
            >
                {props.messages && props.messages.map((msg, index) => (
                    <Message who={msg.who}>{msg.message}</Message>
                ))}
            </Box>
            <Box h="10%" w="100%" bg="whiteAlpha.500" minHeight="100px">
                Send Form
            </Box>
        </VStack>
    )
}

export { Chats }