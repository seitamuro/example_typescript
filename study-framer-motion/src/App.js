import {
  VStack
} from "@chakra-ui/react"

import Introduction from "./components/Introduction";
import Animation from "./components/Animation"

const App = () => {
  return (
    <VStack>
      <Introduction />
      <Animation />
    </VStack>
  )
}

export default App;
