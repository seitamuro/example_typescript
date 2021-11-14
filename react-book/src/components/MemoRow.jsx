import MemoNo from "./MemoNo"
import MemoContent from "./MemoContent"
import MemoDelete from "./MemoDelete"
import MemoList from "./MemoList"

const MemoRow = (props) => {
    return (
        <div>
            <MemoNo no={props.no} />
            <MemoContent content={props.content} />
            <MemoDelete no={props.no} />
        </div>
    )
}

export default MemoRow