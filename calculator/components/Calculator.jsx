import AnswerDisplay from "./AnswerDisplay"
import CalculatorButton from "./CalculatorButton"

import { useState, useEffect } from "react"

export default function Calculator() {
    const [answer, setAnswer] = useState("0")
    const [display, setDisplay] = useState("0")
    const [stack, setStack] = useState("0")
    const [operator, setOperator] = useState("")

    const appendValue = (value) => () => {
        setAnswer(prevState => {
            if (parseInt(prevState) == 0) {
                return parseInt(value).toString()
            } else {
                return prevState + value
            }
        })
    }

    const deleteValue = () => {
        setAnswer(prevState => prevState.length <= 1 ? "0" : prevState.slice(0, -1))

        if (answer.length <= 1) {
            setDisplay("0")
        }
    }

    const deleteAll = () => {
        setAnswer("0")
        setStack("0")
        setDisplay("0")
    }

    const add = () => {
        const result = parseInt(stack) + parseInt(answer)
        setStack(result)
        setAnswer("0")
        setDisplay(result)
        setOperator("+")
    }

    const sub = () => {
        var result = answer
        if (stack != 0) {
            result = parseInt(stack) - parseInt(answer)
        }
        setStack(result)
        setAnswer("0")
        setDisplay(result)
        setOperator("-")
    }

    const mul = () => {
        var result = answer
        if (stack != 0) {
            result = parseInt(stack) * parseInt(answer)
        }
        setStack(result)
        setAnswer("0")
        setDisplay(result)
        setOperator("*")
    }

    const div = () => {
        var result = answer
        if (stack != 0) {
            result = parseInt(stack) / parseInt(answer)
        }
        setStack(result)
        setAnswer("0")
        setDisplay(result)
        setOperator("/")
    }

    const equal = () => {
        switch (operator) {
            case "+":
                add()
                break

            case "-":
                sub()
                break

            case "*":
                mul()
                break
            
            case "/":
                div()
                break

            default:
                break
        }
    }

    useEffect(() => {
        if (answer != "0") {
            setDisplay(answer)
        }
    }, [answer])

    return (
        <div className="container calculator-frame py-4">
            <AnswerDisplay value={display} />

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
                <CalculatorButton className="col m-2 bg-primary" onClick={div}>/</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2" onClick={appendValue("4")}>4</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("5")}>5</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("6")}>6</CalculatorButton>
                <CalculatorButton className="col m-2 bg-primary" onClick={mul}>*</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2" onClick={appendValue("1")}>1</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("2")}>2</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("3")}>3</CalculatorButton>
                <CalculatorButton className="col m-2 bg-primary" onClick={sub}>-</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2" onClick={appendValue("00")}>00</CalculatorButton>
                <CalculatorButton className="col m-2" onClick={appendValue("0")}>0</CalculatorButton>
                <CalculatorButton className="col m-2 bg-primary" onClick={equal}>=</CalculatorButton>
                <CalculatorButton className="col m-2 bg-primary" onClick={add}>+</CalculatorButton>
            </div>
        </div>
    )
}