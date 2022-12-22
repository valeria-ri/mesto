let popup = document.querySelector('.popup');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__about');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text-input_type_name');
let jobInput = formElement.querySelector('.popup__text-input_type_about');

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}
profileEditButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup_opened');
}
popupCloseButton.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener('submit', handleFormSubmit);