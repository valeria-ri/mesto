import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector, popupsElementsConfig) {
    super(popupSelector, popupsElementsConfig);
    this._popupImg = this._popup.querySelector(this._popupsElementsConfig.imageSelector);
    this._popupCaption = this._popup.querySelector(this._popupsElementsConfig.captionSelector);
  }

  open(data) {
    super.open();
    this._popupCaption.textContent = data.name;
    this._popupImg.alt = data.name;
    this._popupImg.src = data.link;
  }
}

export default PopupWithImage;