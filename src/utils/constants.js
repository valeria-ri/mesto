const initialCards = [
  {
    name: 'Эльбрус',
    link: 'https://images.unsplash.com/photo-1638989420853-a6437f7a0d2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80'
  },
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1605640486537-93da02d98119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1599821020079-515af554d944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    name: 'Плато Лаго-Наки',
    link: 'https://images.unsplash.com/photo-1538649575097-06857fa59f34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1604770807934-87599401ba2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    name: 'Териберка',
    link: 'https://images.unsplash.com/photo-1632397606358-1121c7de6c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'
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