import mockAxios from "jest-mock-axios"

import { BASE_URL, fetchUsers } from "./utils"

jest.mock("axios")

describe("fetchUsers", () => {
    afterEach(() => {
        mockAxios.reset()
    })

    describe("when API call is successful", () => {
        it("should return users list", () => {
            const users = [
                { id: 1, name: "John" },
                { id: 2, name: "Andrew"}
            ]
            mockAxios.get.mockResolvedValueOnce(users)

            const result = await fetchUsers()

            expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users`)
            expect(result).toEqual(users)
        })
    })

    describe("when API call fails", () => {
        it("should return empty users list.", () => {
            const message = "Network Error"
            mockAxios.get.mockResolvedValueOnce(new Error(message))

            const result = await fetchUsers()

            expect(mockAxios.get).toHaveBeenCalledWith(`${BASE_URL}/users`)
            expect(result).toEqual([])
        })
    })
})
