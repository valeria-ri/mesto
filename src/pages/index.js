import './index.css';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

import {
  cardConfig,
  validationConfig,
  editProfileConfig,
  addProfileConfig,
  confirmationConfig,
  popupsElementsConfig,
} from '../utils/constants.js';

const api = new Api(
  "https://nomoreparties.co/v1/cohort-61",
  "dc4e7a03-585d-4419-af57-53fac49f94a8"
);

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([items, user]) => {
    console.log(items);
    userId = user._id;
    userInfo.setUserInfo(user);
    cardList.renderItems(items);
  })
  .catch(err => console.log(err))


const popupWithImage = new PopupWithImage(popupsElementsConfig.popupImgSelector, popupsElementsConfig);
popupWithImage.setEventListeners();

const popupWithConfirmation = new PopupWithConfirmation(confirmationConfig.popupConfirmSelector, popupsElementsConfig);
popupWithConfirmation.setEventListeners();

const createCard = (item) => {
  const card = new Card({
    data: item, 
    handleCardClick: () => {
      popupWithImage.open(item)
    },
    handleLikeClick: () => {
      card.likeCard()
    },
    handleDeleteClick: () => {
      popupWithConfirmation.handleConfirm(() => {
        popupWithConfirmation.renderLoading(true);
        api
          .deleteCard(item._id)
          .then(() => {
            card.deleteCard();
            popupWithConfirmation.close();
          })
          .catch(err => console.log(err))
          .finally(() => popupWithConfirmation.renderLoading(false));
      });
      popupWithConfirmation.open();
    }
  }, cardConfig, userId, api);
  return card.generateCard();
}

const cardList = new Section(
  (item) => {
    const card = createCard(item);
    cardList.addItem(card);
  }, 
  cardConfig.cardGridSelector)


const userInfo = new UserInfo({
  userNameSelector: editProfileConfig.userNameSelector,
  userJobSelector: editProfileConfig.userJobSelector,
  userAvatarSelector: editProfileConfig.userAvatarSelector
})

const editFormValidator = new FormValidator(validationConfig, editProfileConfig.formEdit);
editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationConfig, addProfileConfig.formAdd);
addFormValidator.enableValidation();

const editAvatarFormValidator = new FormValidator(validationConfig, editProfileConfig.formAvatar);
editAvatarFormValidator.enableValidation();

// const popupWithEditForm = new PopupWithForm(editProfileConfig.popupEditSelector, ({name, job, avatar}) => {
//   userInfo.setUserInfo({name, job, avatar});
// }, popupsElementsConfig)


const popupWithEditForm = new PopupWithForm(
  editProfileConfig.popupEditSelector,
  (items) => {
    popupWithEditForm.renderLoading(true);
    api
      .editProfile(items)
      .then(data => {
        userInfo.setUserInfo(data);
        popupWithEditForm.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupWithEditForm.renderLoading(false));
  }, popupsElementsConfig)

popupWithEditForm.setEventListeners();

editProfileConfig.btnEdit.addEventListener('click', () => {
  editFormValidator.resetValidation();
  const userdata = userInfo.getUserInfo();
  popupWithEditForm.setInputValues(userdata);
  popupWithEditForm.open();
})

// const popupWithAddForm = new PopupWithForm(addProfileConfig.popupAddSelector, (newItem) => {
//   const newCard = createCard(newItem);
//   const newElement = newCard.generateCard();
//   cardList.addItem(newElement);
// }, popupsElementsConfig)

const popupWithAddForm = new PopupWithForm(
  addProfileConfig.popupAddSelector, 
  (newItem) => {
    popupWithAddForm.renderLoading(true);
    api
      .addCard(newItem)
      .then(data => cardList.addItem(data))
      .catch(err => console.log(err))
      .finally(() => popupWithAddForm.renderLoading(false));
}, popupsElementsConfig)


popupWithAddForm.setEventListeners();

addProfileConfig.btnAdd.addEventListener('click', () => {
  addFormValidator.resetValidation();
  popupWithAddForm.open();
})

const popupWithEditAvatarForm = new PopupWithForm(
  editProfileConfig.popupAvatarSelector,
  (item) => {
    popupWithEditAvatarForm.renderLoading(true);
    api
      .editAvatar(item)
      .then(data => userInfo.setUserInfo(data))
      .catch(err => console.log(err))
      .finally(() => popupWithEditAvatarForm.renderLoading(false));
  }, popupsElementsConfig)

popupWithEditAvatarForm.setEventListeners();

document.querySelector(editProfileConfig.userAvatarSelector).addEventListener('click', () => {
  editAvatarFormValidator.resetValidation();
  popupWithEditAvatarForm.open();
})