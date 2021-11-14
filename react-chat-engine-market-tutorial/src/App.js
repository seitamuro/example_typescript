import "./App.css"

import { ContextProvider } from "./data/context"

import ListingsPage from "./ListingsPage"
import DetailsPage from "./DetailsPage"

export default function App() {
    const { pathname } = window.location
    return (
        <ContextProvider>
            { pathname === "/" && <ListingsPage /> }
            { pathname.indexOf("product") !== -1 && <DetailsPage /> }
        </ContextProvider>
    )
}