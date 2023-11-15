const { GeneralCard } = require("../classes/GeneralCard");
const { SingleCard } = require("../classes/SingleCard");

describe("SingleCard", () => {
  it("new object is an instance of SingleCard and GeneralCard classes", () => {
    const TestCard = new SingleCard(
        "Title A",
        "http://image.com",
        "card009",
        200,
        ["sm"],
        [{ title: "Front Cover", templateId: "template001" }]
      );
    expect(TestCard instanceof SingleCard).toBe(true);
    expect(TestCard instanceof GeneralCard).toBe(true);
  });
  it("new object has title, imageUrl, card_id, base_price, available sizes and pages  properties", () => {
    const TestCard = new SingleCard(
      "Title A",
      "http://image.com",
      "card009",
      200,
      [{ id: "sm", title: "Small" }],
      [{ title: "Front Cover", templateId: "template001" }]
    );
    expect(TestCard.title).toBe("Title A");
    expect(TestCard.imageUrl).toBe("http://image.com");
    expect(TestCard.card_id).toBe("card009");
    expect(TestCard.base_price).toBe(200);
    expect(TestCard.availableSizes).toEqual([{ id: "sm", title: "Small" }]);
    expect(TestCard.pages).toEqual([
      { title: "Front Cover", templateId: "template001" },
    ]);
  });
});
