import {
  Box,
  Flex
} from "@chakra-ui/react"

import {
  motion,
  useMotionValue,
  useTransform
} from "framer-motion"


export default function Introduction() {
    const x = useMotionValue(0)
    const MotionBox = motion(Box)
    const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])
    const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    }

    return (
        <Box>
            <Flex>
                <MotionBox
                height="40px"
                width="40px"
                bg="red.300"
                drag="x"
                dragConstraints={{left: -100, right: 100}}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                />
                <MotionBox
                animate={{ scale: 0.5 }}
                bg="yellow.300"
                height="40px"
                width="40px"
                />
                <MotionBox
                initial="hidden"
                animate="visible"
                variants={variants}
                bg="green.300"
                height="40px"
                width="40px"
                />
                <MotionBox
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                bg="blue.300"
                height="40px"
                width="40px"
                />
                <MotionBox
                drag="x"
                bg="blue.300"
                style={{ x, opacity }}
                height="40px"
                width="40px"
                />
            </Flex>
        </Box>
    )
}