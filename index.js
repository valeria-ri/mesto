//массив карточек
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

//профиль
const userName = document.querySelector('.profile__name');
const userJob = document.querySelector('.profile__about');

//карточки
const cardTemplate = document.querySelector('.card-template').content;
const cardGrid = document.querySelector('.card-grid__items');
const card = document.querySelector('.card');
const cardImage = document.querySelector('.card__image');

//попапы
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_image');

//формы попапов
const formEdit = popupEdit.querySelector('.popup__form_type_edit');
const userNameInput = formEdit.querySelector('.popup__text-input_type_name');
const userJobInput = formEdit.querySelector('.popup__text-input_type_about');
const submitEdit = formEdit.querySelector('.popup__submit-btn_type_edit');

const formAdd = popupAdd.querySelector('.popup__form_type_add');
const cardNameInput = formAdd.querySelector('.popup__text-input_type_card-name');
const cardLinkInput = formAdd.querySelector('.popup__text-input_type_card-link');
const submitAdd = formAdd.querySelector('.popup__submit-btn_type_add');

//кнопки
const btnEdit = document.querySelector('.profile__edit-button');
const btnAdd = document.querySelector('.profile__add-button');
const btnCloseEditPopup = popupEdit.querySelector('.popup__close-btn_type_edit');
const btnCloseAddPopup = popupAdd.querySelector('.popup__close-btn_type_add');
const btnCloseImgPopup = popupImg.querySelector('.popup__close-btn_type_image');



//открытие попапа
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

btnEdit.addEventListener('click', function() {
  openPopup(popupEdit);
  userNameInput.value = userName.textContent;
  userJobInput.value = userJob.textContent;
});

btnAdd.addEventListener('click', function() {
  openPopup(popupAdd);
});

function openPopupImg(item) {
  const bigImg = popupImg.querySelector('.popup__image');
  const popupCaption = popupImg.querySelector('.popup__caption');
  bigImg.src = item.link;
  bigImg.alt = item.name;
  popupCaption.textContent = item.name;
  openPopup(popupImg);
}

//закрытие попапа
function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

btnCloseEditPopup.addEventListener('click', function() {
  closePopup(popupEdit);
})

btnCloseAddPopup.addEventListener('click', function() {
  closePopup(popupAdd);
})

btnCloseImgPopup.addEventListener('click', function() {
  closePopup(popupImg);
})

//лайк карточки
function likeCard(evt) {
  evt.target.classList.toggle('card__like_active');
}

//удаление карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

//создание карточек
function createCard(item) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImg = card.querySelector('.card__image');
  const cardName = card.querySelector('.card__title');
  const btnLikeCard = card.querySelector('.card__like');
  const btnDeleteCard = card.querySelector('.card__delete');
  cardImg.src = item.link;
  cardImg.alt = item.name;
  cardName.textContent = item.name;
  btnLikeCard.addEventListener('click', likeCard);
  btnDeleteCard.addEventListener('click', deleteCard);
  cardImg.addEventListener('click', function() {
    openPopupImg(item);
  });
  return card;
}

function renderCards() {
  initialCards.forEach(function(item) {
    const cardHTML = createCard(item);
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