const cardConfig = {
  cardTemplateSelector: '.card-template',
  cardSelector: '.card',
  cardLikeSelector: '.card__like',
  cardActiveLikeSelector: 'card__like_active',
  cardLikeCount: '.card__like-count',
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
  userAvatarSelector: '.profile__avatar',
  popupEditSelector: '.popup_type_edit',
  popupAvatarSelector: '.popup_type_avatar',
  btnEdit: document.querySelector('.profile__edit-button'),
  btnAvatar: document.querySelector('.profile__avatar'),
  formEdit: document.forms.user,
  formAvatar: document.forms.avatar,
  userNameInput: document.querySelector('.popup__input_type_name'),
  userJobInput: document.querySelector('.popup__input_type_about')
}

const addProfileConfig = {
  popupAddSelector: '.popup_type_add',
  btnAdd: document.querySelector('.profile__add-button'),
  formAdd: document.forms.newcard
}

const confirmationConfig = {
  popupConfirmSelector: '.popup_type_confirm'
}

const popupsElementsConfig = {
  popupImgSelector: '.popup_type_image',
  openedPopupSelector: 'popup_opened',
  closePopupBtnSelector: 'popup__close-btn',
  imageSelector: '.popup__image',
  captionSelector: '.popup__caption',
  popupFormSelector: '.popup__form',
  popupInputSelector: '.popup__input',
  popupSubmitBtnSelector: '.popup__submit-btn'
}


export {
  cardConfig,
  validationConfig,
  editProfileConfig,
  addProfileConfig,
  confirmationConfig,
  popupsElementsConfig
};