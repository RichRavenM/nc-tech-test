const request = require("supertest");
const { app } = require("../server");

// test('returns matching card title', async () => {
//   const response = await request(app).get('/cards/card001')

//   expect(response.status).toBe(200)
//   expect(response.body).toEqual(expect.objectContaining({
//     title: 'card 1 title',
//   }))
// })

describe("/cards", () => {
  describe("GET", () => {
    test("GET 200: Responds with a status code of 200 on successful request", async () => {
      const response = await request(app).get("/cards");
      expect(response.status).toBe(200);
    });
  });
});
