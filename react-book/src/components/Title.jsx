import { useContext } from "react"
import SampleContext from "./context/SampleContext"

const Title = () => {
    const context = useContext(SampleContext)
    return (
        <div className="card p-2 my-3">
            <h2>{context.title}</h2>
        </div>
    )
}

export default Title