import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, popupsElementsConfig) {
    super(popupSelector, popupsElementsConfig);
    this._confirmBtn = this._popup.querySelector(this._popupsElementsConfig.popupSubmitBtnSelector);
  }

  handleConfirm(handleConfirmCallback) {
    this._handleConfirmCallback = handleConfirmCallback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmBtn.addEventListener('click', () => {
      this._handleConfirmCallback();
    })
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._confirmBtn.textContent = 'Удаление...';
    } else {
      this._confirmBtn.textContent = 'Да';
    }
  }
}

export default PopupWithConfirmation;