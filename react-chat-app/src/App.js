import { LoginProvider } from "./LoginProvider"
import Home from "./Home"

export default function App() {
    return(
        <LoginProvider>
            <Home />
        </LoginProvider>
    )
}