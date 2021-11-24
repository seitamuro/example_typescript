import {renderHook, act} from "@testing-library/react-hooks"

import axios from "axios"

import useUsers from "../hooks/useUsers";

jest.mock("axios")

describe("Testing useUsers", () => {
    test("get users from server", async () => {
        const answer = [
            {
                "username": "user1",
                "age": 10,
                "email": "user1@gmail.com"
            }
        ]

        axios.get.mockResolvedValue({"data": answer})
        const {result, waitForNextUpdate} = renderHook(() => useUsers())
        await waitForNextUpdate()
        expect(axios.get).toHaveBeenCalledTimes(1)
        console.log(`${JSON.stringify(result.current)}`)
        expect(result.current[0]).toEqual(answer)
    })
})