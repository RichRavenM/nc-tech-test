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
  it("GeneralCard has static totalCards property", () => {
    expect(GeneralCard.totalCards).toBe(3);
    const TestCard = new GeneralCard("Title A", "http://image.com", "card009");
    expect(TestCard.totalCards).toBe(undefined);
  });
  it("static increaseTotalCards increases totalCards value by 1 and decreaseTotalCards decreases it by 1", () => {
    const startVal = GeneralCard.totalCards;
    GeneralCard.increaseTotalCards();
    expect(GeneralCard.totalCards).toBe(4);
    expect(GeneralCard.totalCards - startVal).toBe(1);
    GeneralCard.decreaseTotalCards();
    expect(GeneralCard.totalCards).toBe(3);
    expect(GeneralCard.totalCards - startVal).toBe(0);
  });
});
