// import
const { Client } = require("pg")
const request = require("supertest")
const { app } = require("../server/server")
const io = require("socket.io-client")

// mocking
jest.mock("pg", () => {
    const mClient = {
        connect: jest.fn(),
        query: jest.fn(),
        end: jest.fn()
    }
    return { Client: jest.fn(() => mClient) }
})

jest.mock("socket.io-client", () => {
    const emit = jest.fn()
    const on = jest.fn()
    const socket = {emit, on}
    return jest.fn(() => socket)
})

let server

// testing
describe("Testing Express Server", () => {
    let client;

    beforeAll(async done => {
        // setup socket client
        io.mockClear()
        io().on.mockClear()
        io().emit.mockClear()

        // setup express server
        client = new Client()
        server = app.listen(4000, (err) => {
            if (err) return done(err)
            global.agent = request.agent(server)
            done()
        })
    })

    afterAll(async () => {
        // close jest
        jest.clearAllMocks()

        // close express server
        await server.close(done)
    })

    it("get users", async () => {
        const users = [
            {
                age: 10,
                email: "user1@mail.com",
                username: "user1",
            }
        ]
        client.query.mockResolvedValueOnce({ rows: users, rowCount: 1})

        const response = await global.agent.get("/users")
        expect(response.statusCode).toBe(200)
        expect(JSON.parse(response.text)).toEqual(users)
    })

    describe("post new user", () => {
        test("should success", async () => {
            const user = {
                "username": "user1",
                "age": 10,
                "email": "user1@mail.com"
            }

            client.query.mockResolvedValueOnce("success")
            const response = await global.agent.post("/adduser", user)
            expect(response.text).toBe("success")
        })
    })
})