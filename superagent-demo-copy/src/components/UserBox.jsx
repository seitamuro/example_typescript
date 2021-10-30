import { useState } from "react"
import request from "superagent"

export  default function UserBox() {
    const [userData, setUserData] = useState([])

    const handleAddUser = (name, mail) => {
        var url = "/post_user"

        request
            .post(url)
            .send({name: name, mail: mail})
            .end((err, res) => {
                if (err) {
                    alert(res.text)
                }

                var map = JSON.parse(res.text)
                setUserData(map)
            })
    }

    return(
        <div style="width: 300px">
            <UserForm addUser={handleAddUser} />
            <hr />
            <UserList userData={userData} />
        </div>
    )
}