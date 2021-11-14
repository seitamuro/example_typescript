import { useState } from "react"

function useCounter() {
    const [num, setNum] = useState(0)

    const count = () => {
        setNum(num + 1)
    }

    return [num, count]
}

export default useCounter