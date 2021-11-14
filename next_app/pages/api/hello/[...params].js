import apidata from "../../../components/data"
import handler from "../hello"

export default function multiHandler(req, res) {
    const {
        query: {params: [id, item]}
    } = req

    const result = { id: id, item: apidata[id][item]}
    res.json(result)
}