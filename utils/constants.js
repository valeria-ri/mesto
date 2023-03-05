const initialCards = [
  {
    name: 'Карачаевск',
    link: './images/card-karachaevsk.jpeg'
  },
  {
    name: 'Гора Эльбрус',
    link: './images/card-elbrus.jpeg'
  },
  {
    name: 'Домбай',
    link: './images/card-dombay.jpeg'
  },
  {
    name: 'Карелия',
    link: './images/card-karelia.jpg'
  },
  {
    name: 'Мурманская область',
    link: './images/card-murmansk.jpg'
  },
  {
    name: 'Териберка',
    link: './images/card-teriberka.jpg'
  }
];

const cardConfig = {
  cardTemplateSelector: '.card-template',
  cardSelector: '.card',
  cardLikeSelector: '.card__like',
  cardActiveLikeSelector: 'card__like_active',
  cardDeleteSelector: '.card__delete',
  cardTitleSelector: '.card__title',
  cardImgSelector: '.card__image',
  cardGridSelector: '.card-grid__items'
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

const editProfileConfig = {
  userNameSelector: '.profile__name',
  userJobSelector: '.profile__about',
  popupEditSelector: '.popup_type_edit',
  btnEdit: document.querySelector('.profile__edit-button'),
  formEdit: document.forms.user,
  userNameInput: document.querySelector('.popup__input_type_name'),
  userJobInput: document.querySelector('.popup__input_type_about')
}

const addProfileConfig = {
  popupAddSelector: '.popup_type_add',
  btnAdd: document.querySelector('.profile__add-button'),
  formAdd: document.forms.newcard
}

const popupsElementsConfig = {
  popupImgSelector: '.popup_type_image',
  openedPopupSelector: 'popup_opened',
  closePopupBtnSelector: 'popup__close-btn',
  imageSelector: '.popup__image',
  captionSelector: '.popup__caption',
  popupFormSelector: '.popup__form',
  popupInputSelector: '.popup__input'
}


export {
  initialCards,
  cardConfig,
  validationConfig,
  editProfileConfig,
  addProfileConfig,
  popupsElementsConfig
};