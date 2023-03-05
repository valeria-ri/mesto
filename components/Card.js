class Card {
  constructor({data, handleCardClick}, cardConfig) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;

    this._cardConfig = cardConfig;
    
    this._deleteCard = this._deleteCard.bind(this);
    this._toggleLike = this._toggleLike.bind(this);
    this._openImg = this._openImg.bind(this);
  }

  _getCardFromTemplate() {
    return document
      .querySelector(this._cardConfig.cardTemplateSelector)
      .content
      .querySelector(this._cardConfig.cardSelector)
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
    this._likeButton.classList.toggle(this._cardConfig.cardActiveLikeSelector);
  }

  _openImg() {
    this._handleCardClick(this._name, this._link);
  }

  generateCard() {
    this._element = this._getCardFromTemplate();
    this._element.querySelector(this._cardConfig.cardTitleSelector).textContent = this._name;

    this._cardImage = this._element.querySelector(this._cardConfig.cardImgSelector);
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._deleteButton = this._element.querySelector(this._cardConfig.cardDeleteSelector);
    this._likeButton = this._element.querySelector(this._cardConfig.cardLikeSelector);

    this._addEventListeners();
    return this._element;
  }
}

export default Card;