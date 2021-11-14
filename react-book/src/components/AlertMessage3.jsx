import useTax from "./hook/useTax"

const AlertMessage3 = () => {
    const [price, tax, reduced, setPrice] = useTax(10, 8)

    const doChange = (e) => {
        let p = e.target.value
        setPrice(p)
    }

    return (
        <div className="alert alert-primary h4">
            <p className="h4">通常税率: {tax()}円.</p>
            <p className="h4">軽減税率: {reduced()}円.</p>
            <div className="form-group">
                <label className="form-group-label">Price</label>
                <input type="number" className="form-control" onChange={doChange} value={price} />
            </div>
        </div>
    )
}

export default AlertMessage3