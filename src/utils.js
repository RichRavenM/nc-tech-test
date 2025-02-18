const { GeneralCard } = require("./classes/GeneralCard");
const { SingleCard } = require("./classes/SingleCard");

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

exports.formatSingleCard = (card, cache) => {
  const imageUrl = cache[card.pages[0].templateId];
  const availableSizes = this.generateSizesArray(card.sizes)
  const singleCard = new SingleCard(
    card.title,
    imageUrl,
    card.id,
    card.basePrice,
    availableSizes,
    card.pages
  );
  return singleCard;
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
