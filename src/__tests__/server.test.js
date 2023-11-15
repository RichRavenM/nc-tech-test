const request = require("supertest");
const { app } = require("../server");

describe("/cards", () => {
  describe("GET", () => {
    it("GET 200: Responds with a 200 status a JSON array of card objects detailing each card's title, imageUrl and id", async () => {
      const response = await request(app).get("/cards");
      expect(response.status).toBe(200);
      const { cards } = response.body;
      expect(cards).toHaveLength(3);
      cards.forEach((card) => {
        expect(card).toHaveProperty("title");
        expect(card).toHaveProperty("imageUrl");
        expect(card).toHaveProperty("card_id");
      });
    });
  });
});

