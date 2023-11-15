const { getCards } = require("./controllers/CardControllers");

const express = require("express");

const app = express();

app.set("json spaces", 2);

app.get("/cards", getCards);

app.get("/cards/:cardId/:sizeId?", () => {
  // respond with card by id
});

module.exports = { app };
