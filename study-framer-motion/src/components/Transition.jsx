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

const MotionList = motion(List)
const MotionListItem = motion(ListItem)

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5
        }
    }
}

const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const staggerDelayContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5
        }
    }
}

const staggerDirectionContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            staggerDirection: -1
        }
    }
}

const afterChildrenContainer = {
    hidden: {
        opacity: 0,
        transition: { when: "afterChildren" }
    }
}

export const Transition = () => {
    return (
        <Center>
            <VStack>
                <MotionSquareBox
                    animate={{ x: 100, y: 100, opacity: 1 }}
                    transition={{
                        delay: 1,
                        x: { type: "spring", stiffness: 100 },
                        default: { duration: 2 }
                    }}
                />

                <MotionList
                    variants={container}
                    initial="hidden"
                    animate="show"
                    border="1px"
                >
                    <MotionListItem variants={item}>
                        1
                    </MotionListItem>
                    <MotionListItem variants={item}>
                        2
                    </MotionListItem>
                    <MotionListItem variants={item}>
                        3
                    </MotionListItem>
                </MotionList>

                <MotionList
                    variants={staggerDelayContainer}
                    initial="hidden"
                    animate="show"
                    border="1px"
                >
                    <MotionListItem variants={item}>
                        1
                    </MotionListItem>
                    <MotionListItem variants={item}>
                        2
                    </MotionListItem>
                    <MotionListItem variants={item}>
                        3
                    </MotionListItem>
                </MotionList>

                <MotionList
                    variants={staggerDirectionContainer}
                    initial="hidden"
                    animate="show"
                    border="1px"
                >
                    <MotionListItem variants={item}>
                        1
                    </MotionListItem>
                    <MotionListItem variants={item}>
                        2
                    </MotionListItem>
                    <MotionListItem variants={item}>
                        3
                    </MotionListItem>
                </MotionList>

                <MotionList
                    variants={afterChildrenContainer}
                    animate="hidden"
                    border="1px"
                >
                    <MotionListItem variants={item}>
                        1
                    </MotionListItem>
                    <MotionListItem variants={item}>
                        2
                    </MotionListItem>
                    <MotionListItem variants={item}>
                        3
                    </MotionListItem>
                </MotionList>

                <MotionSquareBox
                    animate={{ rotate: 180 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />

                <MotionSquareBox
                    animate={{ rotate: 45 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                />

                <MotionSquareBox
                    animate={{ rotate: 45 }}
                    transition={{ repeat: Infinity, duration: 2, repeatType: "mirror" }}
                />

                <MotionSquareBox
                    animate={{ x: 100 }}
                    transition={{ duration: 2, type: "tween" }}
                />

                <MotionSquareBox
                    animate={{ x: 100 }}
                    transition={{ duration: 2, type: "spring" }}
                />

                <MotionSquareBox
                    animate={{ opacity: 0 }}
                    bg="red.900"
                    transition={{ ease: [ 0.17, 0.67, 0.83, 0.67 ]}}
                />

                <MotionSquareBox
                    animate={{ rotate: 180 }}
                    transition={{ from: 90, duration: 2 }}
                />

                <HStack>
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "linear", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "easeIn", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "easeInOut", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "circIn", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "circOut", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "circInOut", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "backIn", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "backOut", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "backInOut", duration: 2 }}
                    />
                    <MotionSquareBox
                        animate={{ rotate: 180 }}
                        transition={{ ease: "anticipate", duration: 2 }}
                    />
                </HStack>

                <MotionSquareBox
                    animate={{ scale: [0, 1, 0.5, 1] }}
                    transition={{ times: [0, 0.1, 0.9, 1] }}
                />

                <MotionSquareBox
                    animate={{ rotate: 180 }}
                    transition={{ type: "inertia", velocity: 150 }}
                />

                <MotionSquareBox
                    drag
                    dragTransition={{
                        power: 0,
                        modifyTarget: target => Math.round(target / 50) * 50
                    }}
                />

                <MotionSquareBox
                    drag
                    dragTransition={{
                        min: 0,
                        max: 100,
                        bounceStiffness: 100
                    }}
                />

                <MotionSquareBox
                    drag
                    dragTransition={{ power: 0.2 }}
                >
                    0.2
                </MotionSquareBox>

                <MotionSquareBox
                    drag
                    dragTransition={{ power: 10 }}
                >
                    10
                </MotionSquareBox>

                <MotionSquareBox
                    drag
                    dragTransition={{ timeConstant: 200 }}
                />

                <MotionSquareBox
                    drag
                    dragTransition={{ restDelta: 10 }}
                />

            </VStack>
        </Center>
    )
}