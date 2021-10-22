import { useState } from "react"

const useTax = (t1, t2) => {
    const [price, setPrice] = useState(1000)
    const [tx1] = useState(t1)
    const [tx2] = useState(t2)

    const tax = () => {
        return Math.floor(price * (1.0 + tx1 / 100))
    }

    const reduced = () => {
        return Math.floor(price * (1.0 + tx2 / 100))
    }

    return [price, tax, reduced, setPrice]
}

export default useTax