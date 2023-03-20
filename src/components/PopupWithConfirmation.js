import Popup from './Popup.js';

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, popupsElementsConfig) {
    super(popupSelector, popupsElementsConfig);
    this._confirmBtn = this._popup.querySelector(this._popupsElementsConfig.popupSubmitBtnSelector);
    this._confirmBtnText = this._confirmBtn.textContent;
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

  renderLoading(isLoading, loadingText='Удаление...') {
    if(isLoading) {
      this._confirmBtn.textContent = loadingText;
    } else {
      this._confirmBtn.textContent = this._confirmBtnText;
    }
  }
}

export default PopupWithConfirmation;