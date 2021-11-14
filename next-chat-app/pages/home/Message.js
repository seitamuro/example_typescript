import {
    Box,
    Flex,
    Spacer,
} from "@chakra-ui/react"

const Message =  (props) => {
    var className = "";

    if (props.who == "mine") {
        className += "my-message "
    }

    if (props.who == "others") {
        className += "others-message "
    }

    return (
        <Flex>
            {props.who == "mine" && <Spacer />}
            <Box borderRadius="lg" className={className} orderWidth="1px" p="8px" m="8px" maxWidth="50%" width="max-content">
                {props.children}
            </Box>
            {props.who == "others" && <Spacer />}
        </Flex>
    )
}

export { Message }