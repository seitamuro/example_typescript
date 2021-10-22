import {useState, useEffect} from "react";

const Toggle = () => {
    const [toggle, setToggle] = useState(false)

    const inverseToggle = () => {
        setToggle(prevState => prevState ? false : true);
    }

    useEffect( () => {
        console.log(`Toggle state is ${toggle}!`)
        if (toggle) {
            console.log("connect to database...");
        }

        return () => {
            console.log("close database...")
        }
    })

    return (
        <button onClick={inverseToggle}>
            {toggle ? "open!" : "close"}
        </button>
    )
}

export default Toggle