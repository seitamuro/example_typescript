import axios from "axios"
import MockAdapter from "axios-mock-adapter"

import { BASE_URL, fetchUsers } from "../utils"

describe("fetchUsers", () => {
    let mock;

    beforeAll(() => {
        mock = new MockAdapter(axios)
    })

    afterEach(() => {
        mock.reset()
    })

    describe("when API call is successful", () => {
        it("should return users list", async () => {
            const users = [
                { id: 1, name: "John" },
                { id: 2, name: "Andrew" },
            ]
            mock.onGet(`${BASE_URL}/users`).reply(200, users)

            const result = await fetchUsers()

            expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`)
            expect(result.data).toEqual(users)
        })
    })

    describe("when API call fails", () => {
        it("should return empty users list", async () => {
            mock.onGet(`${BASE_URL}/users`).networkErrorOnce()

            const result = await fetchUsers()

            expect(mock.history.get[0].url).toEqual(`${BASE_URL}/users`)
            expect(result).toEqual([])
        })
    })
})