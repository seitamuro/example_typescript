import { useEffect } from "react"

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
    useVelocity,
    transform,
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

const MotionValueExample5 = () => {
    const x = useMotionValue(0)
    const inputColor = useVelocity(x)
    const backgroundColor = useTransform(inputColor, [-100, 0, 100], ["#f00", "#000", "#00f"])

    return (
        <MotionSquareBox
            drag="x"
            dragTransition={{
                max: 100,
                min: -100
            }}
            style={{ x, backgroundColor }}
        />
    )
}

const MotionValueExample6 = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const opacity = useMotionValue(1)

    useEffect(() => {
        function updateOpacity() {
            const maxXY = Math.max(x.get(), y.get())
            const newOpacity = transform(maxXY, [0, 100], [1, 0.3])
            opacity.set(newOpacity)
        }

        const unsubscribeX = x.onChange(updateOpacity)
        const unsubscribeY = y.onChange(updateOpacity)

        return () => {
            unsubscribeX()
            unsubscribeY()
        }
    }, [])

    return (
        <MotionSquareBox
            drag
            dragTransition={{
                min: 0,
                max: 100,
            }}
            style={{ x, y, opacity }}
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
                <MotionValueExample5 />
                <MotionValueExample6 />
            </VStack>
        </Center>
    )
}