const { selectCards, selectCardById } = require("../models/CardModels");

exports.getCards = async (request, response, next) => {
  const cards = await selectCards();
  response.status(200).send({ cards: cards });
};

exports.getCardsById = async (request, response, next) => {
  const { cardId } = request.params;
  try {
    const card = await selectCardById(cardId);
    response.status(200).send({ card });
  } catch (error) {
    console.log(error)

    next(error);
  }
};
