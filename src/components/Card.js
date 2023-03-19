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
    
    // this._deleteCard = this._deleteCard.bind(this);
    // this._toggleLike = this._toggleLike.bind(this);
    // this._openImg = this._openImg.bind(this);
  }

  _getCardFromTemplate() {
    this._element = document
      .querySelector(this._cardConfig.cardTemplateSelector)
      .content
      .querySelector(this._cardConfig.cardSelector)
      .cloneNode(true);
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }

  likeCard() {
    if(!(this._likeButton.classList.contains(this._cardConfig.cardActiveLikeSelector))) {
      this._api.like(this._id)
        .then((data) => {
          this._likeButton.classList.add(this._cardConfig.cardActiveLikeSelector);
          this._likeCount.textContent = data.likes.length;
        })
        .catch(err => console.log(err))
    } else {
      this._api.dislike(this._id)
        .then((data) => {
          this._likeButton.classList.remove(this._cardConfig.cardActiveLikeSelector);
          this._likeCount.textContent = data.likes.length;
        })
        .catch(err => console.log(err))
    }
  }

  _addEventListeners() {
    this._deleteButton.addEventListener('click', () => this._handleDeleteClick());
    this._likeButton.addEventListener('click', () => this._handleLikeClick());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._data));
  }

  generateCard() {
    this._getCardFromTemplate();

    this._cardImage = this._element.querySelector(this._cardConfig.cardImgSelector);
    this._likeButton = this._element.querySelector(this._cardConfig.cardLikeSelector);
    this._likeCount = this._element.querySelector(this._cardConfig.cardLikeCount);
    this._deleteButton = this._element.querySelector(this._cardConfig.cardDeleteSelector);
    this._cardTitle = this._element.querySelector(this._cardConfig.cardTitleSelector);

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    if(!(this._owner === this._userId)) {
      this._deleteButton.style.display = 'none';
    }

    if(this._likes.find((item) => this._userId === item._id)) {
      this._likeButton.classList.add(this._cardConfig.cardActiveLikeSelector);
    }

    this._addEventListeners();
    return this._element;
  }
}

export default Card;