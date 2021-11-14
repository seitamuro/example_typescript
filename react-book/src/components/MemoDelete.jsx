import useMemo from "./hook/useMemo";

const MemoDelete = (props) => {
    const [_memo, _addMemo, delMemo] = useMemo()

    const onClick = () => {
        delMemo(props.id)
    }

    return (
        <button className="btn btn-primary" onClick={onClick}>Del</button>
    )
}

export default MemoDelete