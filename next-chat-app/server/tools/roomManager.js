const { useRangeSlider } = require("@chakra-ui/react")
const {getLoggedInUser } = require("../tools/userManger")

var rooms = []

module.exports = addRoom
module.exports = joinRoom

const addRoom = (room) => {
    rooms.push({
        name: room,
        members: []
    })
}

const joinRoom = (room, user_id) => {
    const user = getLoggedInUser(user_id)
    const index = getRoomIndex(room)

    rooms[index].members.push(user.username)
}

function getRoomIndex(room) {
    return rooms.findIndex(r => r.name == room)
}

function isExists(room) {
    return getRoomIndex >= 0
}