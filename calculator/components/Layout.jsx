import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"
import MyContext from "./context/MyContext"
import { useContext } from "react"

export default function Layout(props) {
    const context = useContext(MyContext)

    return (
        <div>
            <Head>
                <title>{context.title} - {props.subtitle}</title>
                <link rel="stylesheet" href="./bootstrap.min.css"></link>
                <link rel="stylesheet" href="./calculator.css" />
            </Head>

            <Header header={context.title} />

            <div className="container">
                {props.children}
            </div>

            <Footer />
        </div>
    )
}