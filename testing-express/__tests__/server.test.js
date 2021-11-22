const request = require("supertest")
const app = require("../server/app")

describe("Testing Express Server", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
    })
})