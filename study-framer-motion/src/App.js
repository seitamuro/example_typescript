import {
  VStack
} from "@chakra-ui/react"

import Introduction from "./components/Introduction";
import Animation from "./components/Animation"
import { Transition } from "./components/Transition";
import { Gesture } from "./components/Gesture";

const App = () => {
  return (
    <VStack>
      {/* <Introduction /> */}
      {/* <Animation /> */}
      {/* <Transition /> */}
      <Gesture />
    </VStack>
  )
}

export default App;
