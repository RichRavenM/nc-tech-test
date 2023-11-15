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

describe("/cards/:cardId", () => {
  describe("GET", () => {
    test("returns matching card title", async () => {
      const response = await request(app).get("/cards/card003");
      expect(response.status).toBe(200);
      const { card } = response.body;
      expect(card).toHaveProperty("title", "card 3 title");
      expect(card).toHaveProperty("imageUrl", "/front-cover-landscape.jpg");
      expect(card).toHaveProperty("card_id", "card003");
      expect(card).toHaveProperty("base_price", 200);
      expect(card.availableSizes).toEqual([
        {
          id: "md",
          title: "Medium",
        },
        {
          id: "lg",
          title: "Large",
        },
      ]);
      expect(card.pages).toEqual([
        {
          title: "Front Cover",
          templateId: "template006",
        },
        {
          title: "Inside Top",
          templateId: "template007",
        },
        {
          title: "Inside Bottom",
          templateId: "template007",
        },
        {
          title: "Back Cover",
          templateId: "template008",
        },
      ]);
    });
  });
});
