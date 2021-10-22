import {useState} from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(false)

    const inverseToggle = () => {
        setToggle(prevState => prevState ? false : true);
    }

    return (
        <button onClick={inverseToggle}>
            {toggle ? "open!" : "close"}
        </button>
    )
}

export default Toggle