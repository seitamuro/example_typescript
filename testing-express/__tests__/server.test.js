const request = require("supertest")
const app = require("../server/app")

describe("Testing Express Server", () => {
    test("It should response the GET method", () => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    })
})