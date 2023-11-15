const { GeneralCard } = require("../classes/GeneralCard");

describe("GeneralCard", () => {
  it("new object is an instance of GeneralCard class", () => {
    const TestCard = new GeneralCard("Title A", "http://image.com", "card009");
    expect(TestCard instanceof GeneralCard).toBe(true);
  });
  it("new object has title, imageUrl, and card_id properties", () => {
    const TestCard = new GeneralCard("Title A", "http://image.com", "card009");
    expect(TestCard.title).toBe("Title A");
    expect(TestCard.imageUrl).toBe("http://image.com");
    expect(TestCard.card_id).toBe("card009");
  });
});
