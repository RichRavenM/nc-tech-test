const fs = require("fs/promises");

exports.selectCards = async () => {
  const cardRead = fs.readFile("src/data/cards.json", "utf-8");
  const templateRead = fs.readFile("src/data/templates.json", "utf-8");

  const [cards, templates] = await Promise.all([cardRead, templateRead]);
};
