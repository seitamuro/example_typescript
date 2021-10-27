export default function AnswerDisplay(props) {
    return (
        <p className="answer-display p-4 h3">
            <b>{props.value}</b>
        </p>
    )
}