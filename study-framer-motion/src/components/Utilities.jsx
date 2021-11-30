import { useEffect } from "react"

import {
    Box,
    Center,
    HStack,
    VStack,
} from "@chakra-ui/react"

import {
    motion,
    useCycle,
    useReducedMotion,
    useDragControls,
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

const UseCycleExample = () => {
    const [x, cycleX] = useCycle(0, 50, 100)

    return (
        <MotionSquareBox
            animate={{ x: x }}
            onTap={() => cycleX()}
        />
    )
}

const UseReduceMotionExample = ({ isOpen }) => {
    const shouldReduceMotion = useReducedMotion()
    const closedX = shouldReduceMotion ? 0 : "-100%"

    return (
        <MotionSquareBox
            animate = {{
                opacity: isOpen ? 1: 0,
                x: isOpen ? 0 : closedX
            }}
        />
    )
}

const UseDragControlsExample = () => {
    const dragControls = useDragControls()

    function startDrag(event) {
        dragControls.start(event, { snapToCursor: false })
    }

    return (
        <>
            <MotionSquareBox onPointerDown={startDrag} />
            <MotionSquareBox drag="x" dragControls={dragControls} />
        </>
    )
}

export const Utilities = () => {
    return (
        <Center>
            <VStack>
                <UseCycleExample />
                <UseReduceMotionExample />
                <UseDragControlsExample />
            </VStack>
        </Center>
    )
}