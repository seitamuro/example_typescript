import useMemo from "./hook/useMemo"
import MemoRow from "./MemoRow"

const MemoList = () => {
    const [memo, _addMemo, _delMemo] = useMemo()
    console.log(memo)

    return (
        <ol className="list-group">
            {
                memo.map((value, key) => (
                    <li className="list-group-item" key={key}>
                        <MemoRow no={key} content={value} />
                    </li>
                ))
            }
        </ol>
    )
}

export default MemoList