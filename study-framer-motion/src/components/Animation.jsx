import {
    Box,
    Center,
    VStack,
    List, 
    ListItem,
    background,
} from "@chakra-ui/react"

import {
    motion,
    useAnimation,
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

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
}

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

const delayList = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren"
        }
    }
}

const dynamicVariants = {
    visible: i => ({
        opacity: 1,
        transition: {
            delay: i * 0.3,
        },
    }),
    hidden: { opacity: 0 },
}

const items = [1, 2, 3, 4]

export default function Animation() {
    const controls = useAnimation()
    const listControls = useAnimation()

    listControls.start(i => ({
        opacity: 0,
        x: 100,
        transition: { delay: i * 0.3},
    }))

    controls.start({
        x: "100%",
        backgroundColor: "#f00",
        transition: { duration: 3 },
    })

    controls.stop({
        x: "50%",
        backgroundColor: "#0f0",
        transition: { duration: 0 }
    })

    return (
        <Center>
            <VStack>
                <MotionSquareBox
                    animate={{ x: 100 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                />
                <MotionSquareBox
                    animate={{ x: [0, 100, 0] }}
                />
                <MotionSquareBox
                    x={500}
                    animate={{ x: [null, 100]}}
                />
                <MotionSquareBox
                    x={500}
                    animate={{ x: [null, 100, 200]}}
                    transition={{ duration: 3, times: [0, 0.2, 1] }}
                />
                <MotionSquareBox
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                />
                <MotionList
                    initial="hidden"
                    animate="visible"
                    variants={list}
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
                    initial="hidden"
                    animate="visible"
                    variants={delayList}
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
                    initial="hidden"
                    animate="visible"
                    variants={list}
                >
                    {items.map((item, i) => (
                        <MotionListItem
                            custom={i}
                            animate="visible"
                            variants={dynamicVariants}
                        >
                            {item}
                        </MotionListItem>
                    ))}
                </MotionList>
                <MotionSquareBox animate={controls} />

                <MotionList
                >
                    <MotionListItem custom={0} animate={listControls}>
                        1
                    </MotionListItem>
                    <MotionListItem custom={1} animate={listControls}>
                        2
                    </MotionListItem>
                    <MotionListItem custom={2} animate={listControls}>
                        3
                    </MotionListItem>
                </MotionList>

                <MotionSquareBox
                    layout
                    animate={{ opacity: 0.5 }}
                    transition={{
                        opacity: { ease: "linear" },
                        layout: { duration: 0.3 }
                    }}
                />
            </VStack>
        </Center>
    )
}