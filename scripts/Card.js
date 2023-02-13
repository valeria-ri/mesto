class Card {
  constructor(data, template, openPopupShow) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._openPopupShow = openPopupShow;

    this._deleteCard = this._deleteCard.bind(this);
    this._toggleLike = this._toggleLike.bind(this);
  }

  _getCardFromTemplate() {
    return document
      .querySelector(this._template)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _addEventListeners() {
    this._element.querySelector('.card__delete').addEventListener('click', this._deleteCard);
    this._element.querySelector('.card__like').addEventListener('click', this._toggleLike);
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._openPopupShow(this._name, this._link);
    });
  }

  _deleteCard() {
    this._element.remove();
  }

  _toggleLike() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active');
  }

  getCard() {
    this._element = this._getCardFromTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._addEventListeners();
    return this._element;
  }
}

export default Card;