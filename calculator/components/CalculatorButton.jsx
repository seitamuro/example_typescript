export default function CalculatorButton(props) {

    return (
        <button className={"btn calculator-button " + props.className} onClick={props.onClick}>
            {props.children}
        </button>
    )
}