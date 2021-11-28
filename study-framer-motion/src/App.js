import {
  VStack
} from "@chakra-ui/react"

import Introduction from "./components/Introduction";
import Animation from "./components/Animation"
import { Transition } from "./components/Transition";

const App = () => {
  return (
    <VStack>
      {/* <Introduction /> */}
      {/* <Animation /> */}
      <Transition />
    </VStack>
  )
}

export default App;
