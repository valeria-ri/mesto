import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  cardConfig,
  validationConfig,
  editProfileConfig,
  addProfileConfig,
  popupsElementsConfig,
} from '../utils/constants.js';

const popupWithImage = new PopupWithImage(popupsElementsConfig.popupImgSelector, popupsElementsConfig);
popupWithImage.setEventListeners();

const createCard = (data) => {
  const card = new Card({
    data: data, 
    handleCardClick: () => {
      popupWithImage.open(data)
    }
  }, cardConfig);
  return card;
}

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    const element = card.generateCard();
    cardList.addItem(element);
  }
}, cardConfig.cardGridSelector)

cardList.renderItems();

const userInfo = new UserInfo({
  userNameSelector: editProfileConfig.userNameSelector,
  userJobSelector: editProfileConfig.userJobSelector
})

const editFormValidator = new FormValidator(validationConfig, editProfileConfig.formEdit);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, addProfileConfig.formAdd);
addFormValidator.enableValidation();



const popupWithEditForm = new PopupWithForm(editProfileConfig.popupEditSelector, () => {
  userInfo.setUserInfo(editProfileConfig.userNameInput, editProfileConfig.userJobInput);
}, popupsElementsConfig)

popupWithEditForm.setEventListeners();

editProfileConfig.btnEdit.addEventListener('click', () => {
  editFormValidator.resetValidation();
  const user = userInfo.getUserInfo();
  editProfileConfig.userNameInput.value = user.name;
  editProfileConfig.userJobInput.value = user.job;
  popupWithEditForm.open();
})


const popupWithAddForm = new PopupWithForm(addProfileConfig.popupAddSelector, (newItem) => {
  const newCard = createCard(newItem);
  const newElement = newCard.generateCard();
  cardList.addItem(newElement);
}, popupsElementsConfig)

popupWithAddForm.setEventListeners();

addProfileConfig.btnAdd.addEventListener('click', () => {
  addFormValidator.resetValidation();
  popupWithAddForm.open();
})