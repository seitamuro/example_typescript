import {
  VStack
} from "@chakra-ui/react"

import Introduction from "./components/Introduction";
import Animation from "./components/Animation"
import { Transition } from "./components/Transition";
import { Gesture } from "./components/Gesture";
import { MotionValue } from "./components/MotionValue";

const App = () => {
  return (
    <VStack>
      {/* <Introduction /> */}
      {/* <Animation /> */}
      {/* <Transition /> */}
      {/* <Gesture /> */}
      <MotionValue />
    </VStack>
  )
}

export default App;
