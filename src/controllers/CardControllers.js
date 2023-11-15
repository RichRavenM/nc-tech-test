const {
  selectCards,
  insertCard,
  selectCardById,
  removeCardsById,
} = require("../models/CardModels");

exports.getCards = async (request, response, next) => {
  const cards = await selectCards();
  response.status(200).send({ cards: cards });
};

exports.postCard = async (request, response, next) => {
  const { body } = request;
  const card = await insertCard(body);
  response.status(201).send({ card });
};

exports.getCardsById = async (request, response, next) => {
  const { cardId } = request.params;
  try {
    const card = await selectCardById(cardId);
    response.status(200).send({ card });
  } catch (error) {
    next(error);
  }
};

exports.deleteCardsById = async (request, response, next) => {
  const { cardId } = request.params;
  try {
    await removeCardsById(cardId);
    response.status(204).send();
  } catch (error) {
    next(error);
  }
};
