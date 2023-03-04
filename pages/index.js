import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
//import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  cardTemplateSelector,
  initialCards,
  cardGridSelector,
  userNameSelector, 
  userJobSelector,
  popupImgSelector,
  popupEditSelector,
  popupAddSelector,
  validationConfig,
  formEdit,
  userNameInput,
  userJobInput,
  formAdd,
  btnEdit,
  btnAdd,
} from '../utils/constants.js';

const popupWithImage = new PopupWithImage(popupImgSelector);
popupWithImage.setEventListeners();

const createCard = (data) => {
  const card = new Card({
    data: data, 
    handleCardClick: () => {
      popupWithImage.open(data)
    }
  }, cardTemplateSelector);
  return card;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    const element = card.generateCard();
    cardList.addItem(element);
  }
}, cardGridSelector)

cardList.renderItems();

const userInfo = new UserInfo({
  userNameSelector: userNameSelector,
  userJobSelector: userJobSelector
})

const editFormValidator = new FormValidator(validationConfig, formEdit);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, formAdd);
addFormValidator.enableValidation();



const popupWithEditForm = new PopupWithForm(popupEditSelector, () => {
  userInfo.setUserInfo(userNameInput, userJobInput);
})

popupWithEditForm.setEventListeners();

btnEdit.addEventListener('click', () => {
  editFormValidator.resetValidation();
  const user = userInfo.getUserInfo();
  userNameInput.value = user.name;
  userJobInput.value = user.job;
  popupWithEditForm.open();
})


const popupWithAddForm = new PopupWithForm(popupAddSelector, (newItem) => {
  const newCard = createCard(newItem);
  const newElement = newCard.generateCard();
  cardList.addItem(newElement);
})

popupWithAddForm.setEventListeners();

btnAdd.addEventListener('click', () => {
  addFormValidator.resetValidation();
  popupWithAddForm.open();
})