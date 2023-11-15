const fs = require("fs/promises");
const {
  templateUrlCache,
  formatGeneralCards,
  formatSingleCard,
} = require("../utils");
const { json } = require("express");

exports.selectCards = async () => {
  const cardRead = fs.readFile("src/data/cards.json", "utf-8");
  const templateRead = fs.readFile("src/data/templates.json", "utf-8");

  const [cards, templates] = await Promise.all([cardRead, templateRead]);

  const templateCache = templateUrlCache(JSON.parse(templates));
  const formattedCards = formatGeneralCards(JSON.parse(cards), templateCache);

  return formattedCards;
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
