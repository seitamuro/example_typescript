import useCounter from "./hook/useCounter"

const AlertMessage2 = (props) => {
    const [counter, plus] = useCounter()

    return (
        <div className="alert alert-primary h5 text-center">
            <h4>count: {counter}</h4>
            <button onClick={plus} className="btn btn-primary">
                count
            </button>
        </div>
    )
}

export default AlertMessage2