import Popup from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open({name, link}) {
    this._popupCaption.textContent = name;
    this._popupImg.alt = name;
    this._popupImg.src = link;
    super.open();
  }
}

export default PopupWithImage;