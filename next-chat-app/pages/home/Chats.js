import React from "react"

import {
    Box,
    VStack
} from "@chakra-ui/react"

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
                className="chats"
                sx={{
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    "&.rooms": {
                        "-ms-overflow-style": "none",
                        "scrollbar-width": "none"
                    }
                }}
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