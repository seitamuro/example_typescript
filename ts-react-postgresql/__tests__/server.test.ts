const app = require("../server/index")
const request = require("supertest")
import { Client } from "pg"
import * as pg from "pg"

jest.mock("pg", () => {
    const mClient = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn(),
    }
    return { Client: jest.fn(() => mClient)}
})

describe("Testing Server", () => {
    let client: pg.Client;

    beforeEach(() => {
        client = new Client()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it("should connect with socket", async () => {
        const response = [
            {
                username: "user1",
                email: "user1@mail.com"
            }
        ]
        const res = await request(app)
            .get(`${process.env.EXPRESS_HOST}:${process.env.API_PORT}/users`)
        expect(res.data).toEqual(response)
    })
})