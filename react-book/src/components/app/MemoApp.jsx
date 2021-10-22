import InputForm from "../InputForm";
import MemoList from "../MemoList";

const MemoApp = () => {
    return (
        <div className="container">
            <h4>Memo App</h4>
            <InputForm />
            <MemoList />
        </div>
    )
}

export default MemoApp