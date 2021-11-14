import { useState, useEffect } from "react"
import AlertMessage from "./AlertMessage"

const CalcTotalApp = () => {
    const [val, setVal] = useState(0)
    const [msg, setMsg] = useState("set a number...")

    const doChange = (event) => {
        setVal(event.target.value)
    }

    useEffect(() => {
        let total = 0
        for(let i = 0;i <= val;i++) {
            total += i
        }
        setMsg(`total ${total}.`)
    }, [val])

    return (
        <div>
            <div className="container">
                <h4 className="my-3">Hooks Sample</h4>
                <AlertMessage msg={msg} />
                <div className="form-group">
                    <label>Input:</label>
                    <input type="number" className="form-control" onChange={doChange} />
                </div>
            </div>
        </div>
    )
}

export default CalcTotalApp