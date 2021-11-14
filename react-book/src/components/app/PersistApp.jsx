import usePersist from "../hook/usePersist";
import { useState } from "react";

const PersistApp = () => {
    const [name, setName] = useState("")
    const [mydata, setMyData] = usePersist("mydata", null)

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onAction = (e) => {
        const data = {
            name: name
        }
        setMyData(data)
    }

    return (
        <div className="container">
            <h5 className="nb-4">{JSON.stringify(mydata)}</h5>
            <div className="form-group">
                <label className="h6">Name:</label>
                <input type="text" onChange={onChangeName} className="form-control" />
                <button className="btn btn-primary" onClick={onAction}>Save it!</button>
            </div>
        </div>
    )
}

export default PersistApp