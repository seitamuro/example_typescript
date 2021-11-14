import { useState, useEffect } from "react"
import usePersist from "../../hook/usePersist"

import Item from "./Item"

const Memo = (props) => {
    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [mode, setMode] = usePersist("mode", "default")
    var [data, setData]= useState([])

    useEffect(() => {
        switch (mode) {
            case "default":
                data = memo.map((value, key) => 
                    <Item key={value.message} value={value} index={key+1} />
                )
                setMode("default")
                break
            
            case "find":
                data = fmemo.map((value, key) => (
                    <Item key={value.message} value={value} index={key+1} />
                ))
                break

            default:
                data = memo.map((value, key) => (
                    <Item key={value.message} value={value} index={key+1} />
                ))
        }

        setData(data)
    }, [memo, fmemo])

    console.log(data)
    return (
        <table className="table mt-4">
            <tbody>{data}</tbody>
        </table>
    )
}

export default Memo