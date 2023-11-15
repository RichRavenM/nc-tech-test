const fs = require("fs/promises");
const { templateUrlCache, formatGeneralCards } = require("../utils");
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
  const cardRead = fs.readFile("src/data/cards.json", "utf-8");
  const templateRead = fs.readFile("src/data/templates.json", "utf-8");

  const [cards, templates] = await Promise.all([cardRead, templateRead]);

  const templateCache = templateUrlCache(JSON.parse(templates));

}