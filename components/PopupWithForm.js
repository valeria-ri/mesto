import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, popupsElementsConfig) {
    super(popupSelector, popupsElementsConfig);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(this._popupsElementsConfig.popupFormSelector);
    this._inputList = Array.from(this._form.querySelectorAll(this._popupsElementsConfig.popupInputSelector));
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    })
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    })
  }

  close() {
    this._form.reset();
    super.close();
  }
}

export default PopupWithForm;