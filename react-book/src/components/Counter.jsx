import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const upCounter = () => {
        setCounter(prevState => prevState + 1)
    }

    return (
        <div className="container">
            <p className="subtitle">Count number.</p>
            <div className="alert alert-primary text-center">
                <p className="h5 mb-4">{counter === 0 ? "count start!" : `*** count: ${counter} ***`}</p>
                <button className="btn btn-primary" onClick={upCounter}>Click</button>
            </div>
        </div>
    )
}

export default Counter