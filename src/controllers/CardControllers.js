const { selectCards, selectCardById } = require("../models/CardModels");

exports.getCards = async (request, response, next) => {
  const cards = await selectCards();
  response.status(200).send({ cards: cards });
};

exports.getCardsById = (request, response, next) => {
  const { cardId } = request.params;
  selectCardById(cardId)
  response.status(200).send({})

};
