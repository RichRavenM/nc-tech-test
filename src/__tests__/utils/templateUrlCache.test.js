const { templateUrlCache } = require("../../utils.js");

describe("templateUrlCache", () => {
  it("returns an object", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
      {
        id: "template002",
        width: 300,
        height: 600,
        imageUrl: "",
      },
    ];
    const output = templateUrlCache(input);
    expect(typeof output).toBe("object");
    expect(output).not.toBe(null);
    expect(Array.isArray(output)).toBe(false);
  });
  it("returns an empty object when passed an empty array", () => {
    expect(templateUrlCache([])).toEqual({});
  });
  it("Object has name key which matches name value from single array item", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
    ];
    const idVal = input[0].id;
    const output = templateUrlCache(input);
    expect(output).toHaveProperty(idVal);
  });
  it("Object has values that match input imageUrl from single array item", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
    ];
    const idVal = input[0].id;
    const imageUrlVal = input[0].imageUrl;
    const output = templateUrlCache(input);
    expect(output).toEqual({ [idVal]: imageUrlVal });
  });
  it("Object has correct keys and values from input array with multiple items", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
      {
        id: "template002",
        width: 300,
        height: 600,
        imageUrl: "",
      },
      {
        id: "template003",
        width: 300,
        height: 600,
        imageUrl: "",
      },
      {
        id: "template004",
        width: 300,
        height: 600,
        imageUrl: "/back-cover-portrait.jpg",
      },
    ];
    const output = templateUrlCache(input);
    expect(output).toEqual({
      template001: "/front-cover-portrait-1.jpg",
      template002: "",
      template003: "",
      template004: "/back-cover-portrait.jpg",
    });
  });
  it("original arrays and objects are unmodified", () => {
    const input = [
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
      {
        id: "template002",
        width: 300,
        height: 600,
        imageUrl: "",
      },
      {
        id: "template003",
        width: 300,
        height: 600,
        imageUrl: "",
      },
      {
        id: "template004",
        width: 300,
        height: 600,
        imageUrl: "/back-cover-portrait.jpg",
      },
    ];
    const output = templateUrlCache(input);
    expect(input).toEqual([
      {
        id: "template001",
        width: 300,
        height: 600,
        imageUrl: "/front-cover-portrait-1.jpg",
      },
      {
        id: "template002",
        width: 300,
        height: 600,
        imageUrl: "",
      },
      {
        id: "template003",
        width: 300,
        height: 600,
        imageUrl: "",
      },
      {
        id: "template004",
        width: 300,
        height: 600,
        imageUrl: "/back-cover-portrait.jpg",
      },
    ]);
  });
});
