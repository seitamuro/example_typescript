import CalculatorContext from "./context/CalculatorContext"
import { useContext } from "react"

export default function AnswerDisplay() {
    const context = useContext(CalculatorContext)
    return (
        <p className="answer-display p-4 h3">
            <b>{context.answer}</b>
        </p>
    )
}