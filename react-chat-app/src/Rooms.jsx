import React, { useState } from "react"

const RoomSelect = (props) => {
    const [room ,setRoom] = useState("")

    return (
        <div>
            room select
            <form>
                <label>Room: </label>
                <input type="text" onChange={e => setRoom(e.target.value)}></input><br></br>
                <input type="button" onClick={() => props.setter(room)} value="入室"></input>
            </form>
        </div>
    )
}

export { RoomSelect }