//профиль
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__about');

//карточки
const cardTemplate = document.querySelector('.card-template').content;
const cardGrid = document.querySelector('.card-grid__items');

//попапы
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_image');
const bigImg = popupImg.querySelector('.popup__image');
const popupCaption = popupImg.querySelector('.popup__caption');
const popups = document.querySelectorAll('.popup');

//формы попапов
const formEdit = document.forms.user;
const userNameInput = formEdit.elements.username;
const userJobInput = formEdit.elements.userjob;

const formAdd = document.forms.newcard;
const cardNameInput = formAdd.elements.cardname;
const cardLinkInput = formAdd.elements.cardlink;

//кнопки
const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const btnCloseEditPopup = popupEdit.querySelector('.popup__close-btn_type_edit');
const btnCloseAddPopup = popupAdd.querySelector('.popup__close-btn_type_add');
const btnCloseImgPopup = popupImg.querySelector('.popup__close-btn_type_image');



//открытие попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
}

btnEdit.addEventListener('click', function() {
  openPopup(popupEdit);
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
});

btnAdd.addEventListener('click', function() {
  openPopup(popupAdd);
});

function openPopupImg({name, link}) {
  bigImg.src = link;
  bigImg.alt = name;
  popupCaption.textContent = name;
  openPopup(popupImg);
}

//закрытие попапа
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

//лайк карточки
function toggleLike(evt) {
  evt.target.classList.toggle('card__like_active');
}

//удаление карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

//создание карточек
function createCard({name, link}) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImg = card.querySelector('.card__image');
  const cardName = card.querySelector('.card__title');
  const btnLikeCard = card.querySelector('.card__like');
  const btnDeleteCard = card.querySelector('.card__delete');
  cardImg.src = link;
  cardImg.alt = name;
  cardName.textContent = name;
  btnLikeCard.addEventListener('click', toggleLike);
  btnDeleteCard.addEventListener('click', deleteCard);
  cardImg.addEventListener('click', function() {
    openPopupImg({name, link});
  });
  return card;
}

function renderCards() {
  initialCards.forEach(function({name, link}) {
    const cardHTML = createCard({name, link});
    cardGrid.append(cardHTML);
  })
}
renderCards();

//обработчики форм
function handleFormEditSubmit(evt) {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userJob.textContent = userJobInput.value;
  closePopup(popupEdit);
}

formEdit.addEventListener('submit', handleFormEditSubmit);

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const newCardImg = cardLinkInput.value;
  const newCardName = cardNameInput.value;
  const newCard = createCard({name: newCardName, link: newCardImg});
  cardGrid.prepend(newCard);
  formAdd.reset();
  closePopup(popupAdd);
}

formAdd.addEventListener('submit', handleFormAddSubmit);