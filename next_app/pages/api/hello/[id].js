import apidata from "../../../components/data"

export default function handler(req, res) {
    const {
        query: {id}
    } = req // => id = req.query.id

    res.json(apidata[id])
}