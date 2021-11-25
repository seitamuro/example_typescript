import {renderHook, act} from "@testing-library/react-hooks"

import axios from "axios"

import useUsers from "../hooks/useUsers";

jest.mock("axios")

describe("Testing useUsers", () => {
    const answer = [
        {
            "username": "user1",
            "age": 10,
            "email": "user1@gmail.com"
        }
    ]

    test("get users from server", async () => {
        axios.get.mockResolvedValue({"data": answer})
        const {result, waitForNextUpdate} = renderHook(() => useUsers())
        await waitForNextUpdate()
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(result.current[0]).toEqual(answer)
    })

    test("post user", async () => {
        const user = {
            "username": "user2",
            "age": 10,
            "email": "user2@gmail.com"
        }

        axios.get.mockResolvedValue({"data": answer})
        axios.post.mockResolvedValue({"data": user})
        const {result, waitForNextUpdate} = renderHook(() => useUsers())
        const [users, addUser] = result.current
        await act(async () => {
            addUser(user)
            await waitForNextUpdate()
            expect(axios.post).toHaveBeenCalledTimes(1)
        })
    })

    test("del user", async () => {
        const user = {}

        axios.get.mockResolvedValue({"data": answer})
        axios.post.mockResolvedValue({"data": user})
        const {result} = renderHook(() => useUsers())
        const [users, addUser, delUser] = result.current
        await act(async () => {
            delUser(1)
            expect(axios.post).toHaveBeenCalledTimes(1)
        })
    })
})