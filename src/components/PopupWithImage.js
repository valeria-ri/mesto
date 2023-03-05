import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector, popupsElementsConfig) {
    super(popupSelector, popupsElementsConfig);
    this._popupImg = this._popup.querySelector(this._popupsElementsConfig.imageSelector);
    this._popupCaption = this._popup.querySelector(this._popupsElementsConfig.captionSelector);
  }

  open({name, link}) {
    this._popupCaption.textContent = name;
    this._popupImg.alt = name;
    this._popupImg.src = link;
    super.open();
  }
}

export default PopupWithImage;