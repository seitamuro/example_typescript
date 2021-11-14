import Head from "next/head"
import MyContext from "./context/MyContext"
import { useContext } from "react"

export default function Layout(props) {
    const context = useContext(MyContext)

    return (
        <div>
            <Head>
                <title>{context.title}</title>
                <link rel="icon" href="/favicon.png" />
                <link rel="stylesheet" href="/styles.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>
            </Head>

            <div>
                {props.children}
            </div>
        </div>
    )
}