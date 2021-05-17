import redis = require("redis")
import request = require("supertest")
const app = require("./app")
jest.mock("redis")


describe("GET / - a simple api endpoint", () => {
    beforeEach (() => {

    })
    it('gets the test endpoint', async done => { 
        redis.createClient.mockResolvedValue({
            hgetall: () => {
                return []
            }
        })
        const res = await request(app)
            .post('/api/posts')
            .send({
            userId: 1,
            title: 'test is cool',
      })
    expect(res.statusCode).toEqual(201)
    expect(res.body).toHaveProperty('post')
    });
});
