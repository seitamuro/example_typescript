const AlertMessage = (props) => {
    return (
        <div className="alert alert-primary h5 text-primary">
            <h5>{props.msg}</h5>
        </div>
    )
}

export default AlertMessage