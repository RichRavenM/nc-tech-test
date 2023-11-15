const { GeneralCard } = require("./GeneralCard");

class SingleCard extends GeneralCard {
  constructor(title, imageUrl, card_id, base_price, availableSizes, pages) {
    super(title, imageUrl, card_id);
    this.base_price = base_price;
    this.availableSizes = availableSizes;
    this.pages = pages;
  }
}

module.exports = {SingleCard}