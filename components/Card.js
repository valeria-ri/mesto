class Card {
  constructor({data, handleCardClick}, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._template = cardTemplateSelector;
    
    this._deleteCard = this._deleteCard.bind(this);
    this._toggleLike = this._toggleLike.bind(this);
    this._openImg = this._openImg.bind(this);
  }

  _getCardFromTemplate() {
    return document
      .querySelector(this._template)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  _addEventListeners() {
    this._deleteButton.addEventListener('click', this._deleteCard);
    this._likeButton.addEventListener('click', this._toggleLike);
    this._cardImage.addEventListener('click', this._openImg);
  }

  _deleteCard() {
    this._element.remove();
  }

  _toggleLike() {
    this._likeButton.classList.toggle('card__like_active');
  }

  _openImg() {
    this._handleCardClick(this._name, this._link);
  }

  generateCard() {
    this._element = this._getCardFromTemplate();
    this._element.querySelector('.card__title').textContent = this._name;

    this._cardImage = this._element.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._deleteButton = this._element.querySelector('.card__delete');
    this._likeButton = this._element.querySelector('.card__like');

    this._addEventListeners();
    return this._element;
  }
}

export default Card;