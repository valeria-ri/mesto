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
  cardGridSelector: '.card-grid__items',
  cardTemplateSelector: '.card-template',
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

//Профиль
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__about');

//Попапы
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupShow = document.querySelector('.popup_type_image');
const popupImg = popupShow.querySelector('.popup__image');
const popupCaption = popupShow.querySelector('.popup__caption');
const popups = document.querySelectorAll('.popup');
const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');

//Формы попапов
const formEdit = document.forms.user;
const userNameInput = formEdit.elements.username;
const userJobInput = formEdit.elements.userjob;
const formAdd = document.forms.newcard;
const cardNameInput = formAdd.elements.cardname;
const cardLinkInput = formAdd.elements.cardlink;

//Контейнер карточек
const cardGrid = document.querySelector(cardConfig.cardGridSelector);

export {initialCards, cardConfig, validationConfig, userName, userJob, popupEdit, popupAdd, popupShow, popupImg, popupCaption, popups, btnEdit, btnAdd, formEdit, userNameInput, userJobInput, formAdd, cardNameInput, cardLinkInput, cardGrid};