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

exports.generateSizesArray = (sizes) => {
  const cache = { sm: "Small", md: "Medium", lg: "Large", gt: "Giant" };

  const output = [];

  sizes.forEach((size) => {
    const sizeInfo = {};
    sizeInfo.id = size;
    sizeInfo.title = cache[size];
    if (sizeInfo.title) {
      output.push(sizeInfo);
    }
  });

  return output;
};
