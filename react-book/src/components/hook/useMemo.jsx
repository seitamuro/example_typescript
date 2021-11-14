import usePersist from "./usePersist";

function useMemo() {
    const [memo, setMemo] = usePersist("memo_app", [])

    const addMemo = (text) => {
        memo.push(text)
        setMemo(memo)
    }

    const delMemo = (idx) => {
        memo.splice(idx, 1)
        setMemo(memo)
    }

    return [memo, addMemo, delMemo]
}

export default useMemo