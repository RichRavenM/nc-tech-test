const { selectCards } = require("../models/CardModels");

exports.getCards = (request, response, next) => {
  selectCards().then((cards) => {
    response.status(200).send({ cards: cards });
  });
};
