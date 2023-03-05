class Popup {
  constructor(popupSelector, popupsElementsConfig) {
    this._popup = document.querySelector(popupSelector);
    this._popupsElementsConfig = popupsElementsConfig;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add(this._popupsElementsConfig.openedPopupSelector);
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove(this._popupsElementsConfig.openedPopupSelector);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if ((evt.target.classList.contains(this._popupsElementsConfig.openedPopupSelector)) || 
      (evt.target.classList.contains(this._popupsElementsConfig.closePopupBtnSelector))) {
        this.close();
      }
    })
  }
}

export default Popup;