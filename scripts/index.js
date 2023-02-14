import {initialCards, cardConfig, validationConfig, userName, userJob, popupEdit, popupAdd, popupShow, popupImg, popupCaption, popups, btnEdit, btnAdd, formEdit, userNameInput, userJobInput, formAdd, cardNameInput, cardLinkInput, cardGrid} from './constants.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//Вызов валидации

const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(validationConfig);


//Функции открытия попапов
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

function openPopupShow(name, link) {
  popupImg.src = link;
  popupImg.alt = name;
  popupCaption.textContent = name;
  openPopup(popupShow);
}

btnEdit.addEventListener('click', function() {
  openPopup(popupEdit);
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
  formValidators['user'].resetValidation();
});

btnAdd.addEventListener('click', function() {
  openPopup(popupAdd);
  formAdd.reset();
  formValidators['newcard'].resetValidation();
});

//Функции закрытия попапов
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

popups.forEach(function(popup) {
  popup.addEventListener('mousedown', function(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup);
    }
  })
})

//Создание любой карточки
function createNewCard(item) {
  const card = new Card(item, cardConfig.cardTemplateSelector, openPopupShow);
  const element = card.getCard();
  return element;
}

//Создание карточки из класса
function renderCards() {
  initialCards.forEach((item) => {
    const card = createNewCard(item);
    cardGrid.append(card);
  })
}
renderCards();

//Обработчики форм
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup(popupEdit);
}

formEdit.addEventListener('submit', handleFormEditSubmit);

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const newCard = createNewCard({name: cardNameInput.value, link: cardLinkInput.value});
  cardGrid.prepend(newCard);
  closePopup(popupAdd);
}

formAdd.addEventListener('submit', handleFormAddSubmit);