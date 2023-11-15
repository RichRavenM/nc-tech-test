class GeneralCard {
  constructor(title, imageUrl, card_id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.card_id = card_id;
  }

  static _totalCards = 3;
  static get totalCards() {
    return this._totalCards
  }
  static increaseTotalCards() {
    this._totalCards++;
    return this._totalCards;
  }
  static decreaseTotalCards() {
    this._totalCards--;
    return this._totalCards;
  }
}

module.exports = { GeneralCard };
