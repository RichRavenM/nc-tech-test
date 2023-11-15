const { GeneralCard } = require("../../classes/GeneralCard");
const { formatGeneralCards } = require("../../utils");

describe("formatGeneralCards", () => {
  it("returns an empty array when no cards array is empty", () => {
    const cache = { template001: "/front-cover-portrait-1.jpg" };

    expect(formatGeneralCards([], cache)).toEqual([]);
  });
  it("returned array does not share reference with input cards array", () => {
    const cache = { template001: "/front-cover-portrait-1.jpg" };
    const cards = [];
    const output = formatGeneralCards(cards, cache);
    expect(cards).not.toBe(output);
  });
  it("output object only has title, imageUrl, and card_id properties that match the original card", () => {
    const cache = { template001: "/front-cover-portrait-1.jpg" };
    const cards = [
      {
        id: "card001",
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
      },
    ];

    const output = formatGeneralCards(cards, cache)[0];
    const outputKeys = Object.keys(output);
    expect(outputKeys).toHaveLength(3);
    expect(output).toHaveProperty("title", "example title");
    expect(output).toHaveProperty("imageUrl", "/front-cover-portrait-1.jpg");
    expect(output).toHaveProperty("card_id", "card001");
  });
  it("output object is an instance of GeneralCard class", () => {
    const cache = { template001: "/front-cover-portrait-1.jpg" };
    const cards = [
      {
        id: "card001",
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
      },
    ];
    const output = formatGeneralCards(cards, cache)[0];
    expect(output instanceof GeneralCard).toBe(true);
  });
  it("correctly formats an array of cards,", () => {
    const cache = {
      template001: "/front-cover-portrait-1.jpg",
      template002: "",
    };
    const cards = [
      {
        id: "card001",
        title: "card 1 title",
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
      },
      {
        id: "card002",
        title: "card 2 title",
        sizes: ["md"],
        basePrice: 200,
        pages: [
          {
            title: "Front Cover",
            templateId: "template005",
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
      },
    ];

    const output = formatGeneralCards(cards, cache);
    expect(output).toHaveLength(2);
    output.forEach((card) => {
      expect(card).toHaveProperty("title");
      expect(card).toHaveProperty("imageUrl");
      expect(card).toHaveProperty("card_id");
    });
  });
  it("original cards array is unmodified", () => {
    const cache = { template001: "/front-cover-portrait-1.jpg" };
    const cards = [
      {
        id: "card001",
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
      },
    ];
    formatGeneralCards(cards, cache);
    expect(cards).toEqual([
      {
        id: "card001",
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
      },
    ]);
  });
});
