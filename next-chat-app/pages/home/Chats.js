import React, { useEffect, useState } from "react"

import {
    Box,
    VStack
} from "@chakra-ui/react"

const Chats = (props) => {
    const [height, setHeight] = useState("")

    useEffect(() => {
        if (window !== "undefined") {
            setHeight(window.innerHeight)
        }
    })

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
                Chats
            </Box>
            <Box h="10%" w="100%" bg="whiteAlpha.500" minHeight="100px">
                Send Form
            </Box>
        </VStack>
    )
}

export { Chats }