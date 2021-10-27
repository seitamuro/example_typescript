import AnswerDisplay from "./AnswerDisplay"
import CalculatorButton from "./CalculatorButton"

export default function Calculator() {
    return (
        <div className="container calculator-frame py-4">
            <AnswerDisplay />

            <div className="row pt-2 px-2">
                <CalculatorButton className="col m-2">税込</CalculatorButton>
                <CalculatorButton className="col m-2">税抜</CalculatorButton>
                <CalculatorButton className="col m-2">%</CalculatorButton>
                <CalculatorButton className="col m-2">AC</CalculatorButton>
            </div>

            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2">7</CalculatorButton>
                <CalculatorButton className="col m-2">8</CalculatorButton>
                <CalculatorButton className="col m-2">9</CalculatorButton>
                <CalculatorButton className="col m-2">/</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2">4</CalculatorButton>
                <CalculatorButton className="col m-2">5</CalculatorButton>
                <CalculatorButton className="col m-2">6</CalculatorButton>
                <CalculatorButton className="col m-2">*</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2">1</CalculatorButton>
                <CalculatorButton className="col m-2">2</CalculatorButton>
                <CalculatorButton className="col m-2">3</CalculatorButton>
                <CalculatorButton className="col m-2">-</CalculatorButton>
            </div>
            <div className="row p-1 px-2">
                <CalculatorButton className="col m-2">00</CalculatorButton>
                <CalculatorButton className="col m-2">0</CalculatorButton>
                <CalculatorButton className="col m-2">=</CalculatorButton>
                <CalculatorButton className="col m-2">+</CalculatorButton>
            </div>
        </div>
    )
}