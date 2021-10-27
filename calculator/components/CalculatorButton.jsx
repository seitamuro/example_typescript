export default function CalculatorButton(props) {

    return (
        <button className={props.className + " btn calculator-button"} onClick={props.onClick}>
            {props.children}
        </button>
    )
}