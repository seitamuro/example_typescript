import { Box, forwardRef } from "@chakra-ui/react"
import { motion, isValidMotionProp } from "framer-motion"

const MotionBox = motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    )
    return <Box ref={ref} {...chakraProps} />
  }),
)

function App() {
  return (
        <MotionBox
      boxSize="40px"
      bg="red.300"
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
}

export default App;
