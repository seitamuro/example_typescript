const axios = require("axios")
const Users = require("./users")

jest.mock("axios")

test("should fetch users", () => {
    const users = [{name: "Bob"}]
    const resp = {data: users}
    axios.get.mockResolvedValue(resp)

    return Users.all().then(data => expect(data).toEqual(users))
})