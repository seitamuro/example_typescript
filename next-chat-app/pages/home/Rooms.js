import React from "react"

import {
    Box
} from "@chakra-ui/react"

const Rooms = (props) => {
    return (
        <Box
            bg="red.500"
            overflowY="scroll"
            className="rooms"
            sx={{
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                "&.rooms": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none"
                }
            }}
            {...props}
        >
            Rooms
        </Box>
    )
}

export { Rooms }