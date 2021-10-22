import { useContext } from "react";
import SampleContext from "./context/SampleContext";

const Message2 = () => {
    const context = useContext(SampleContext)

    return (
        <div className="alert alert-primary">
            <p>{context.message}</p>
        </div>
    )
}

export default Message2