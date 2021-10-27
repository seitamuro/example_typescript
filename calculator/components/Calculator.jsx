import AnswerDisplay from "./AnswerDisplay"
import CalculatorButton from "./CalculatorButton"

import { useState } from "react"

export default function Calculator() {
    const [answer, setAnswer] = useState("0")

    const appendValue = (value) => () => 
        setAnswer(prevState => {
            if (parseInt(prevState) == 0) {
                return parseInt(value).toString()
            } else {
                return prevState + value
            }
        }
    )

    const deleteValue = () => setAnswer(prevState => prevState.length <= 1 ? "0" : prevState.slice(0, -1))

    const deleteAll = () => setAnswer("0")

    return (
        <div className="container calculator-frame py-4">
            <AnswerDisplay value={answer} />

            <div className="row pt-2 px-2">
                <CalculatorButton className="col m-2 calculator-button-function">税込</CalculatorButton>
                <CalculatorButton className="col m-2 calculator-button-function">税抜</CalculatorButton>
                <CalculatorButton className="col m-2 calculator-button-reset" onClick={deleteValue}>DEL</CalculatorButton>
                <CalculatorButton className="col m-2 calculator-button-reset" onClick={deleteAll}>AC</CalculatorButton>
            </div>

            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2" onClick={appendValue("7")}>7</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("8")}>8</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("9")}>9</CalculatorButton>
                <CalculatorButton className="col m-2">/</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2" onClick={appendValue("4")}>4</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("5")}>5</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("6")}>6</CalculatorButton>
                <CalculatorButton className="col m-2">*</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2" onClick={appendValue("1")}>1</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("2")}>2</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("3")}>3</CalculatorButton>
                <CalculatorButton className="col m-2">-</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2" onClick={appendValue("00")}>00</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("0")}>0</CalculatorButton>
                <CalculatorButton className="col m-2">=</CalculatorButton>
                <CalculatorButton className="col m-2">+</CalculatorButton>
            </div>
        </div>
    )
}