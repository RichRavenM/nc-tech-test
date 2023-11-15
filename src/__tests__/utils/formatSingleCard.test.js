const { SingleCard } = require("../../classes/SingleCard");
const { formatSingleCard } = require("../../utils");

describe("formatSingleCard", () => {
  it("returns object with title, imageUrl, card_id, base_price, sizes and pages properties", () => {
    const cache = { template001: "/front-cover-portrait-1.jpg" };
    const input = {
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
    };
    const card = formatSingleCard(input, cache);
    expect(card).toHaveProperty("title", "card 1 title");
    expect(card).toHaveProperty("imageUrl", "/front-cover-portrait-1.jpg");
    expect(card).toHaveProperty("card_id", "card001");
    expect(card).toHaveProperty("base_price", 200);
    expect(card.availableSizes).toEqual([
      {
        id: "sm",
        title: "Small",
      },
      {
        id: "md",
        title: "Medium",
      },
      {
        id: "gt",
        title: "Giant",
      },
    ]);
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
    ]);
  });
  it("output is an instance of SingleCard class", () => {
    const input = {
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
    };
    const cache = { template001: "/front-cover-portrait-1.jpg" };

    const output = formatSingleCard(input, cache);
    expect(output instanceof SingleCard).toBe(true)
  });
  it("input array is not modified", ()=> {
    const input = {
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
      };
      const cache = { template001: "/front-cover-portrait-1.jpg" };
  
      formatSingleCard(input, cache);
      expect(input).toEqual({
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
      })
  })
});
