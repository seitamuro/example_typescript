var request = require("superagent")

request.get("http://localhost:3000/players")
    .end((err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log(res.body)
        }
})

request.post("http://localhost:3000/players")
    .send({number: 7, name: "Shibasaki"})
    .end((err, res) => {
        if(err) {
            console.log(err)
        } else {
            console.log(res.status)
        }
})

request.get("http://localhost:3000/players/7")
    .end((err, res) => {
        if(err) {
            console.log(err)
        } else {
            console.log(res.body)
        }
})