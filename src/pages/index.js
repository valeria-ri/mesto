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

// Обращение к API

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: 'dc4e7a03-585d-4419-af57-53fac49f94a8',
    'Content-Type': 'application/json'
  }
}); 

let userId;

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([items, user]) => {
    userId = user._id;
    userInfo.setUserInfo(user);
    cardList.renderItems(items);
  })
  .catch(err => console.log(err))


// Создание экземпляра попапа с картинкой

const popupWithImage = new PopupWithImage(popupsElementsConfig.popupImgSelector, popupsElementsConfig);
popupWithImage.setEventListeners();

// Создание экземпляра попапа с подтверждением удаления

const popupWithConfirmation = new PopupWithConfirmation(confirmationConfig.popupConfirmSelector, popupsElementsConfig);
popupWithConfirmation.setEventListeners();

// Создание экземпляра карточки

const createCard = (item) => {
  const card = new Card({
    data: item,
    // Обработчик клика на картинку
    handleCardClick: () => {
      popupWithImage.open(item)
    },
    // Обработчик лайка
    handleLikeClick: () => {
      if(!card.isLikeActive()) {
        api
          .like(item._id)
          .then(item => card.updateLike(item))
          .catch(err => console.log(err))
      } else {
        api
          .dislike(item._id)
          .then(item => card.updateLike(item))
          .catch(err => console.log(err))
      }
    },
    // Обработчик удаления
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

// Добавление карточек в контейнер

const cardList = new Section(
  createCard, 
  cardConfig.cardGridSelector)

// Создание экземпляра профиля

const userInfo = new UserInfo({
  userNameSelector: editProfileConfig.userNameSelector,
  userJobSelector: editProfileConfig.userJobSelector,
  userAvatarSelector: editProfileConfig.userAvatarSelector
})

// Валидаторы форм

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(validationConfig);

// Создание экземпляра формы редактирования профиля

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
  formValidators['user'].resetValidation();
  const userdata = userInfo.getUserInfo();
  popupWithEditForm.setInputValues(userdata);
  popupWithEditForm.open();
})

// Создание экземпляра формы добавления карточки

const popupWithAddForm = new PopupWithForm(
  addProfileConfig.popupAddSelector, 
  (newItem) => {
    popupWithAddForm.renderLoading(true);
    api
      .addCard(newItem)
      .then(data => {
        cardList.addItem(createCard(data));
        popupWithAddForm.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupWithAddForm.renderLoading(false));
}, popupsElementsConfig)

popupWithAddForm.setEventListeners();

addProfileConfig.btnAdd.addEventListener('click', () => {
  formValidators['newcard'].resetValidation();
  popupWithAddForm.open();
})

//Создание экземпляра формы редактирования профиля

const popupWithEditAvatarForm = new PopupWithForm(
  editProfileConfig.popupAvatarSelector,
  (item) => {
    popupWithEditAvatarForm.renderLoading(true);
    api
      .editAvatar(item)
      .then(data => {
        userInfo.setUserInfo(data);
        popupWithEditAvatarForm.close();
      })
      .catch(err => console.log(err))
      .finally(() => popupWithEditAvatarForm.renderLoading(false));
  }, popupsElementsConfig)

popupWithEditAvatarForm.setEventListeners();

editProfileConfig.btnAvatar.addEventListener('click', () => {
  formValidators['avatar'].resetValidation();
  popupWithEditAvatarForm.open();
})