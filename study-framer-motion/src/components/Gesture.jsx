import {
    Box,
    Center,
    VStack,
    List,
    ListItem,
    HStack,
} from "@chakra-ui/react"

import {
    motion,
} from "framer-motion"

const MotionBox = motion(Box)
const MotionSquareBox = (props) => (
    <MotionBox
        height="40px"
        width="40px"
        bg="gray.300"
        {...props}
    />
)

export const Gesture = () => {
    return(
        <Center>
            <VStack>
                <MotionSquareBox />
                <MotionSquareBox />
                <MotionSquareBox />
            </VStack>
        </Center>
    )
}