const { getCards, getCardsById, deleteCardsById } = require("./controllers/CardControllers");

const { errors } = require("./controllers/ErrorsController");

const express = require("express");

const app = express();

app.set("json spaces", 2);

app.get("/cards", getCards);

app.get("/cards/:cardId", getCardsById);

app.delete("/cards/:cardId", deleteCardsById);

app.use(errors);

module.exports = { app };
