const request = require("supertest");
const { app } = require("../server");
const { GeneralCard } = require("../classes/GeneralCard");


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
  describe("POST", () => {
    it("POST 201: Adds a new card to the database", async () => {
      const response = await request(app)
        .post("/cards")
        .send({
          title: "example title",
          sizes: ["sm", "md", "gt"],
          basePrice: 200,
          pages: [
            {
              title: "Front Cover",
              templateId: "template001",
            },
            {
              title: "Inside Left",
              templateId: "template002",
            },
            {
              title: "Inside Right",
              templateId: "template003",
            },
            {
              title: "Back Cover",
              templateId: "template004",
            },
          ],
        });
      expect(response.status).toBe(201);
      const {card } = response.body
      expect(card).toHaveProperty("id", "card004")
      expect(card).toHaveProperty("title", "example title")
      expect(card).toHaveProperty("basePrice", 200)
      expect(card.sizes).toEqual(["sm", "md", "gt"])
      expect(card.pages).toEqual([
        {
          title: "Front Cover",
          templateId: "template001",
        },
        {
          title: "Inside Left",
          templateId: "template002",
        },
        {
          title: "Inside Right",
          templateId: "template003",
        },
        {
          title: "Back Cover",
          templateId: "template004",
        },
      ])
    });
  });
});

describe("/cards/:cardId", () => {
  describe("GET", () => {
    test("GET 200: returns matching card title", async () => {
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
    it("GET 400: Responds with 400 if id is invalid", async () => {
      const response = await request(app).get("/cards/3");
      expect(response.status).toBe(400);
      expect(response.body.msg).toBe("Invalid ID");
    });
    it("GET 404: Responds with 400 if card does not exist", async () => {
      const response = await request(app).get("/cards/card013");
      expect(response.status).toBe(404);
      expect(response.body.msg).toBe("Card does not exist");
    });
  });
  describe("DELETE", () => {
    it("DELETE 204: Successfully removes card from database", async () => {
      const response = await request(app).delete("/cards/card001");
      expect(response.status).toBe(204);
      const getResponse = await request(app).get("/cards");
      const { cards } = getResponse.body;
      expect(cards).toHaveLength(3);
      expect(GeneralCard.totalCards).toBe(3);
    });
    it("GET 400: Responds with 400 if id is invalid", async () => {
      const response = await request(app).delete("/cards/3");
      expect(response.status).toBe(400);
      expect(response.body.msg).toBe("Invalid ID");
    });
    it("GET 404: Responds with 400 if card does not exist", async () => {
      const response = await request(app).delete("/cards/card013");
      expect(response.status).toBe(404);
      expect(response.body.msg).toBe("Card does not exist");
    });
  });
});
