class UserInfo {
  constructor({userNameSelector, userJobSelector, userAvatarSelector}) {
    this._userName = document.querySelector(userNameSelector);
    this._userJob = document.querySelector(userJobSelector);
    this._userAvatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    this._userInfo = {
      name: this._userName.textContent,
      about: this._userJob.textContent
    }
    return this._userInfo;
  }

  setUserInfo({name, about, avatar}) {
    this._userName.textContent = name;
    this._userJob.textContent = about;
    this._userAvatar.style.backgroundImage = `url(${avatar})`;
  }
}

export default UserInfo;