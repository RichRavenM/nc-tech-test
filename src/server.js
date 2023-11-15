const { getCards, getCardsById } = require("./controllers/CardControllers");

const { errors } = require("./controllers/ErrorsController");

const express = require("express");

const app = express();

app.set("json spaces", 2);

app.get("/cards", getCards);

app.get("/cards/:cardId", getCardsById);

app.use(errors);

module.exports = { app };
