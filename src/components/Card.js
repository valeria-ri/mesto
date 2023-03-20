class Card {
  constructor({data, handleCardClick, handleLikeClick, handleDeleteClick}, cardConfig, userId, api) {
    this._data = data;
    this._id = data._id;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;

    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;

    this._cardConfig = cardConfig;

    this._userId = userId;
    this._owner = data.owner._id;
    this._api = api;
  }

  _getCardFromTemplate() {
    this._element = document
      .querySelector(this._cardConfig.cardTemplateSelector)
      .content
      .querySelector(this._cardConfig.cardSelector)
      .cloneNode(true);
    
    this._cardImage = this._element.querySelector(this._cardConfig.cardImgSelector);
    this._likeButton = this._element.querySelector(this._cardConfig.cardLikeSelector);
    this._likeCount = this._element.querySelector(this._cardConfig.cardLikeCount);
    this._deleteButton = this._element.querySelector(this._cardConfig.cardDeleteSelector);
    this._cardTitle = this._element.querySelector(this._cardConfig.cardTitleSelector);
  }

  deleteCard() {
    this._element.remove();
  }

  _deleteDisplay() {
    if(!(this._owner === this._userId)) {
      this._deleteButton.style.display = 'none';
    }
  }

  isLikeActive() {
    return this._likes.some((item) => this._userId === item._id);
  }

  _toggleLikeState() {
    this._likeCount.textContent = this._likes.length;

    if(this.isLikeActive()) {
      this._likeButton.classList.add(this._cardConfig.cardActiveLikeSelector);
    } else {
      this._likeButton.classList.remove(this._cardConfig.cardActiveLikeSelector);
    }
  }

  updateLike(upd) {
    this._likes = upd.likes;
    this._toggleLikeState();
  }

  _setCardData() {
    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
  }

  _addEventListeners() {
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick());
    this._likeButton.addEventListener('click', () => this._handleLikeClick());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._data));
  }

  generateCard() {
    this._getCardFromTemplate();
    this._setCardData();
    this._deleteDisplay();
    this._toggleLikeState();
    this._addEventListeners();
    
    return this._element;
  }
}

export default Card;