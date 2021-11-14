import { useState } from "react"

const SimpleForm = () => {
    const [title, setTitle] = useState("input form")
    const [message, setMessage] = useState("type your name.")
    const [input, setInput] = useState("")

    const doChange = (event) => {
        setInput(event.target.value)
    }

    const doSubmit = (event) => {
        setTitle("send form")
        setMessage(`Hello ${input} !`)
        event.preventDefault()
    }

    return (
        <div>
            <div className="container">
                <h4>{title}</h4>
                <p className="card h5 p-3">{message}</p>
                <div className="alert alert-primary mt-3">
                    <form onSubmit={doSubmit}>
                        <div className="form-group">
                            <label>Message: </label>
                            <input type="text" className="form-control" onChange={doChange} required pattern="[A-Za-z_,.]+" />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Click" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SimpleForm