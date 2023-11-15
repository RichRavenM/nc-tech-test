const { selectCards } = require("../models/CardModels");

exports.getCards = (request, response, next) => {
  selectCards().then(() => {
    response.status(200).send({});
  });
};
