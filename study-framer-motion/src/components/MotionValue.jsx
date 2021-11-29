import {
    Box,
    Center,
    VStack,
} from "@chakra-ui/react"

import {
    motion,
    useMotionValue,
    useTransform,
    useSpring,
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

const MotionValueExample1 = () => {
    const x = useMotionValue(0)
    const input = [-200, 0, 200]
    const output = [0.3, 1, 0.3]
    const opacity = useTransform(x, input, output)

    return (
        <MotionSquareBox
            drag="x" 
            style={{ x, opacity }}
            dragTransition={{
                min: -200,
                max: 200
            }}
        />
    )
}

const MotionValueExample2 = () => {
    const x = useMotionValue(0)
    const xInput = [-100, 0, 100]
    const opacityOutput = [0.5, 1, 0.5]
    const colorOutput = ["#f00", "#0f0", "#00f"]

    const opacity = useTransform(x, xInput, opacityOutput)
    const backgroundColor = useTransform(x, xInput, colorOutput)

    return (
        <MotionSquareBox
            drag="x"
            style={{ x, opacity, backgroundColor }}
            dragTransition={{
                min: -100,
                max: 100,
            }}
        />
    )
}

const MotionValueExample3 = () => {
    const x = useMotionValue(10)
    const y = useTransform(x, value => value * 2)

    return (
        <MotionSquareBox
            drag="x"
            style={{ x, y }}
        />
    )
}

const MotionValueExample4 = () => {
    const x = useSpring(0, { stiffness: 300 })
    const y = useSpring(x, { damping: 10 })

    return (
        <MotionSquareBox
            drag="x"
            style={{ x, y }}
        />
    )
}

export const MotionValue = () => {
    return (
        <Center>
            <VStack>
                <MotionValueExample1 />
                <MotionValueExample2 />
                <MotionValueExample3 />
                <MotionValueExample4 />
            </VStack>
        </Center>
    )
}