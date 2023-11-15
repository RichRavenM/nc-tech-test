const {
  getCards,
  getCardsById,
  deleteCardsById,
  postCard,
} = require("./controllers/CardControllers");

const { errors } = require("./controllers/ErrorsController");

const express = require("express");

const app = express();

app.use(express.json());

app.set("json spaces", 2);

app.get("/cards", getCards);

app.post("/cards", postCard);

app.get("/cards/:cardId", getCardsById);

app.delete("/cards/:cardId", deleteCardsById);

app.use(errors);

module.exports = { app };
