export class Api {
  constructor(data) {
    this._name = data.name;
    this._cardSelector = cardSelector;
  }

generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__header').textContent = this._name;
  return this._element;
}


  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }
}

