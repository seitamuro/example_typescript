import useMemo from "./hook/useMemo"
import { useState } from "react";

const AddForm = () => {
    const [text, setText] = useState("");
    const [_memo, addMemo, _delMemo] = useMemo()

    const onSubmit = (event) => {
        event.preventDefault()
        addMemo(text)
    }

    const onChange = (e) => {
        setText(e.target.value)
    }

    return (
        <form className="form-group row" onSubmit={onSubmit}>
            <input type="text" className="form-control-sm col" onChange={onChange}/>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}

export default AddForm