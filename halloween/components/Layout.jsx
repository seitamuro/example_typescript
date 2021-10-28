import Head from "next/head"
import MyContext from "./context/MyContext"
import { useContext } from "react"

export default function Layout(props) {
    const context = useContext(MyContext)

    return (
        <html>
            <Head>
                <title>{context.title}</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <div>
                {props.children}
            </div>
        </html>
    )
}