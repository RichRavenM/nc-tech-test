class GeneralCard {
  constructor(title, imageUrl, card_id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.card_id = card_id;
  }

  static _totalCards = 3;
  static get totalCards() {
    return this._totalCards;
  }
  static increaseTotalCards() {
    this._totalCards++;
    return this._totalCards;
  }
  static decreaseTotalCards() {
    this._totalCards--;
    return this._totalCards;
  }
  static generateId() {
    this.increaseTotalCards();
    let idEnd = "" + this.totalCards;
    while (idEnd.length < 3) {
      idEnd = "0" + idEnd;
    }
    return "card" + idEnd;
  }
}

module.exports = { GeneralCard };
