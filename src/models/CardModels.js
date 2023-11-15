const fs = require("fs/promises");
const {
  templateUrlCache,
  formatGeneralCards,
  formatSingleCard,
} = require("../utils");
const { GeneralCard } = require("../classes/GeneralCard");
exports.selectCards = async () => {
  const cardRead = fs.readFile("src/data/cards.json", "utf-8");
  const templateRead = fs.readFile("src/data/templates.json", "utf-8");

  const [cards, templates] = await Promise.all([cardRead, templateRead]);

  const templateCache = templateUrlCache(JSON.parse(templates));
  const formattedCards = formatGeneralCards(JSON.parse(cards), templateCache);

  return formattedCards;
};

exports.insertCard = async (body) => {
  const id = GeneralCard.generateId();
  const newCard = { id, ...body };

  const cards = await fs.readFile("src/data/cards.json", "utf-8");
  const parsedCards = JSON.parse(cards);
  const newCards = JSON.stringify([...parsedCards, newCard], null, 2);
  console.log(newCards);
  await fs.writeFile("src/data/cards.json", newCards);
  return newCard;
};

exports.selectCardById = async (cardId) => {
  const pattern = /card\d{3}/;
  if (!pattern.test(cardId)) {
    throw new Error(400);
  }
  const cardRead = fs.readFile("src/data/cards.json", "utf-8");
  const templateRead = fs.readFile("src/data/templates.json", "utf-8");

  const [cards, templates] = await Promise.all([cardRead, templateRead]);

  const templateCache = templateUrlCache(JSON.parse(templates));

  const matchedCard = JSON.parse(cards).filter((card) => card.id === cardId)[0];
  if (!matchedCard) {
    throw new Error(404);
  }

  const formattedCard = formatSingleCard(matchedCard, templateCache);

  return formattedCard;
};

exports.removeCardsById = async (cardId) => {
  const pattern = /card\d{3}/;
  if (!pattern.test(cardId)) {
    throw new Error(400);
  }

  const cards = await fs.readFile("src/data/cards.json", "utf-8");

  const parsedCards = JSON.parse(cards);
  const filteredCards = parsedCards.filter((card) => card.id !== cardId);
  if (filteredCards.length === parsedCards.length) {
    throw new Error(404);
  }
  const newData = JSON.stringify(filteredCards, null, 2);
  await fs.writeFile("src/data/cards.json", newData);
  GeneralCard.decreaseTotalCards();
  return;
};
