const { GeneralCard } = require("./classes/GeneralCard");

exports.templateUrlCache = (templates) => {
  const cache = {};
  templates.forEach((template) => {
    const id = template.id;
    cache[id] = template.imageUrl;
  });
  return cache;
};

exports.formatGeneralCards = (cards, cache) => {
  const output = [];
  cards.forEach((card) => {
    const imageUrl = cache[card.pages[0].templateId];
    const generalCard = new GeneralCard(card.title, imageUrl, card.id);
    output.push(generalCard);
  });
  return output;
};
